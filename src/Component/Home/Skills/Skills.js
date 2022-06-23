import React from 'react';
import react from '../../../img/react.png'
import css from '../../../img/css.png'
import html from '../../../img/html.png'
import css1 from '../../../img/css.png'
import js from '../../../img/javascript.png'
import github from '../../../img/github.png'
import './Skills.css';

const Skills = () => {
    return (
        <div>
            <h1 className='text-center text-warning fw-bolder p-5 m-2' id='skills'>Skills</h1>
            <div className='img grid img-fluid Width 20%'>
            <img src={react} alt="" />
            <img src={css} alt="" />
            <img src={html} alt="" />
            <img src={css1} alt="" />
            <img src={js} alt="" />
            <img src={github} alt="" />
        </div>
        </div>
    );
}; 

export default Skills;