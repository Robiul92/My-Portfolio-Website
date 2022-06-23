import React from 'react';
import { Link } from 'react-router-dom';
import './Intro.css';
import Facebook from '../../img/Facebook.png'
import LinkedIn from '../../img/linkedin.png'
import Github from '../../img/github.png'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";

const Intro = () => {
    return (
        <div className='Intro'>
            <div className="i-left">
        <div className="i-name">
          
          <span className='child1'>Hy! I Am</span>
          <span className='child2'>Robiul Awal</span>
          <span className='child3'>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <div>
        <Link to="/contract" smooth={true} spy={true}>
          <button className="btn button btn-primary i-button  rounded">Hire me</button>
        </Link>
        <a className='mx-3'  href="https://docs.google.com/document/d/1L-OsUB6intKQw1GVENj_tsb1HL65jNBtN3rOWZNnjwM/edit?usp=sharing" target="_blank" rel="noreferrer"  download>
          <button className="btn button btn-primary i-button  rounded">Download CV</button>
        </a>
        </div>
        <div className="i-icons">
          <a href="https://github.com/Robiul92" target='_blank' rel="noreferrer"><img  src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/robiulawalbd/" target='_blank' rel="noreferrer"><img  src={LinkedIn} alt="" /></a>
          <a href="https://www.facebook.com/robiulawalbd/" target='_blank' rel="noreferrer"><img className='facebook' src={Facebook} alt="" /></a>
          
        </div>
        </div>
        {/* right image side */}
      <div className="i-right sm:none">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        
      </div>
        </div>
    );
};

export default Intro;