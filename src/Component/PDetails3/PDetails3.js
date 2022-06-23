import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../img/pdetails3/edashbord.png' ;
import img2 from '../../img/pdetails3/ereviews.png';
import img3 from '../../img/pdetails3/esaw.png';

const PDetails3 = () => {
    return (
        <div>
            <div className='pb-5'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-90px"
                            src={img1}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block h-auto w-100"
                            src={img2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div><h1 className='text-center'>Funniture Warehouse</h1>
                <p>Electric-saw manufacturer can register/login and sell their parts online, worldwide. This app is fully reponsive</p>
                <div className='text-center'>
                    <button className='btn button btn-primary rounded ' > <a className='text-decoration-none ' href="https://electric-saw.web.app/" target="_blank" rel="noreferrer"><span className='text-white'>Live Demo</span></a></button>
                    <button className='btn button btn-primary rounded m-2' > <a className='text-decoration-none ' href="https://github.com/Robiul92/-manufacturer-website-client-side" target="_blank" rel="noreferrer"><span className='text-white'>Clinte Side</span></a></button>
                    <button className='btn button btn-primary rounded ' > <a className='text-decoration-none ' href="https://github.com/Robiul92/-manufacturer-website-server-side" target="_blank" rel="noreferrer"><span className='text-white'>Server</span></a></button>
                </div>

            </div>

            <div className='p-2'>
                <h2>Features and Functionality</h2>
                <ul>
                    <li>Header Section</li>
                    <li>Product details</li>
                    <li>Review section</li>
                    <li>Banner section</li>
                    <li>Protected Ceckout Page</li>
                    <li>Email password and Google based login system</li>
                    <li>Nasted Dashbord</li>
                    <li>Admin Login</li>
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
                    
                    <li>imgbb</li>
                    <li>React-toastify</li>
                    <li>React hook from</li>
                    <li>React Icons</li>
                    <li>Node.Js</li>
                    <li>MongoDb</li>
                </ul>
            </div>
        </div>
    );
};

export default PDetails3;