import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import home from '../../../img/home.jpg'
import warehouse from '../../../img/warehouse.png'
import saw from '../../../img/electric-saw.png'
import homefoodi from '../../../img/homefoodi1.png'
import './Projects.css'
import { useNavigate } from 'react-router-dom';

const Projects = () => {

  const navigate = useNavigate();

  const firstPdetails = () => {
    navigate('/pdetails1')
  }
  const secondPdetails = () => {
    navigate('/pdetails2')
  }
  const thirdPdetails = () => {
    navigate('/pdetails3')
  }
  return (
    <div>
      <div className='text-center text-warning fw-bolder p-5' id='projects'><h1 >Recent Projects</h1></div>

      <div>
        <CardGroup>
          <Card className='m-2'>
            <Card.Img variant="top" src={homefoodi} />
            <Card.Body>
              <Card.Title>Home food catering</Card.Title>
              <Card.Text>
              It's a home catering web app where customers can order their favorite food items
              </Card.Text>
            </Card.Body>
            <button className='btn button btn-primary i-button  rounded' onClick={firstPdetails}>Project Details</button>
          </Card>
          <Card className='m-2'>
            <Card.Img variant="top" src={warehouse} />
            <Card.Body>
              <Card.Title>Funniture Warehouse</Card.Title>
              <Card.Text>
                This is A Fartunere warehouse website to store and deliver Furniture.
              </Card.Text>
            </Card.Body>
            <button className='btn button i-button btn-primary rounded' onClick={secondPdetails}>Project Details</button>
          </Card>
          <Card className='m-2'>
            <Card.Img variant="top" src={saw} />
            <Card.Body>
              <Card.Title>Electric Saw WebApp</Card.Title>
              <Card.Text>
              Electric-saw manufacturer can register/login and sell their parts online, worldwide
              </Card.Text>
            </Card.Body>
            <button className='btn button i-button btn-primary rounded' onClick={thirdPdetails}>Project Details</button>
          </Card>


        </CardGroup>
      </div>
    </div>
  );
};

export default Projects;