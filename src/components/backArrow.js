import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import "../css/backArrow.css";

const BackToHome = ({ targetId }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/", { state: { scrollTo: targetId } });
  };

  return (
    <button onClick={handleBack} className="back-to-home">
      <div className="fa-arrow-left">
        <ChevronLeft size={28} strokeWidth={2.5} stroke="var(--main-color)" />
      </div>
    </button>
  );
};

export default BackToHome;
