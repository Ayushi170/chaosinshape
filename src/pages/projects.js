import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/projects.css';
import flyer from '../assets/images/flyer.png';
import uiux from '../assets/images/uiux.png';
import merchandise from '../assets/images/merchandise.png';
import flex from '../assets/images/flex.png';
import { initScrollEffect } from '../components/scrolleffect.js';

const textBlocks = [
  { 
    id: 1, 
    text: 'At times, it’s about crafting smooth digital journeys that guide effortlessly', 
    align: 'left', 
    image: uiux,
    hoverText: 'UI/UX Designs that Flow',
    link: '/uiux'
  },
  { 
    id: 2, 
    text: 'Other times, it’s ideas turning into products that inspire connections.', 
    align: 'right', 
    image: merchandise,
    hoverText: 'Merchandise that Resonates',
    link: '/merchandise'
  },
  { 
    id: 3, 
    text: 'Sometimes, it’s visuals that grab attention and leave a lasting impact.', 
    align: 'left', 
    image: flyer,
    hoverText: 'Flyers that Speak Louder',
    link: '/flyer',
  },
  { 
    id: 4, 
    text: 'In moments, prints go big, making a statement loud and clear.', 
    align: 'right', 
    image: flex,
    hoverText: 'Bold Flex Print Designs',
    link: '/flex',
  },
];

const Projects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    initScrollEffect();
  }, []);

  const handleImageClick = (link) => {
    if (link) {
      navigate(link);
    }
  };


  return (
    <Container fluid className="projects-container">
      {textBlocks.map((block) => (
        <Row key={block.id} className="text-row-p align-items-center">
          <Col xs={10} md={6} className={block.align === 'left' ? "text-left-p" : "text-right-p"}>
            <h1 className="project-header">{block.text}</h1>
          </Col>
          <Col xs={10} md={6} className={block.align === 'left' ? "image-right-p" : "image-left-p"}>
            <div 
              className="project-image-wrapper"
              onClick={() => handleImageClick(block.link)}
              style={{ cursor: block.link ? 'pointer' : 'default' }}
            >
              <img src={block.image} alt="Design concept" className="project-image hover-effect" />
              <div className="overlay">
                <span className="hover-text">{block.hoverText}</span>
              </div>
            </div>
          </Col>
        </Row>
      ))}

    </Container>
  );
};

export default Projects;
