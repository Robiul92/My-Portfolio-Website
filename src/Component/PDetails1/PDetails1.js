import React from 'react';
import home from '../../img/pdetails1/home.jpg'
import login from '../../img/pdetails1/hlogin.png'
import service from '../../img/pdetails1/hservice.png'
import { Carousel } from 'react-bootstrap';

const PDetails1 = () => {
    return (
        <div>
          <div className='pb-5'>
             <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-90px"
      src={home}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-auto w-100"
      src={login}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={service}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
        <div><h1 className='text-center'>HomeFoodi catering</h1>
        <p>It's a home made catering web app where customers can order their favorite food items. Every customer must need to login to order any food items. This app is fully reponsive</p>
        <div className='text-center'>
        <button className='btn button btn-primary rounded ' > <a className='text-decoration-none ' href="https://personal-portfolio-8404f.web.app" target="_blank" rel="noreferrer"><span className='text-white'>Live Demo</span></a></button>
        </div>
       
        </div>

        <div className='p-2'>
        <h2>Features and Functionality</h2>
        <ul>
          <li>Header Section</li>
          <li>Service details</li>
          <li>Protected Ceckout Page</li>
          <li>Email password and Google based login system</li>
          <li>Safety Guidelines</li>
        </ul>
        </div>
        <div className='pt-2 pb-5'>
        <h3>List of frameworks and libraries</h3>

<ul>
  <li>Html</li>
  <li>Css</li>
  <li>Bootstrap</li>
  <li>Dom</li>
  <li>React Router</li>
  <li>Firebase Authentication</li>
  <li>React Firebase Hooks</li>
  <li>React-bootstrap</li>
  <li>imgbb</li>
  <li>React-toastify</li>
</ul>
        </div>
        </div>

        
 
 
    );
};

export default PDetails1;