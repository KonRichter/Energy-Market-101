import './WelcomePage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import introGIF from '../../assets/Intro3.gif';
import typingGIF from '../../assets/Typing.gif';
import ChevronRight from '../../assets/ChevronRight.png';
import WindPic from '../../assets/WindPic.jpeg';
import CoalPic from '../../assets/CoalPic.jpeg';
import NuclearPic from '../../assets/NuclearPic.jpeg';
import Header from '../Header/Header';

function WelcomePage({ textForHeader }) {
  return (
    <div className='welcome-page'>
      <Header textForHeader={textForHeader} />
      <div id='welcome-starter'>
        {/* <img src={SolarPic} alt='concentrated solar power plant' /> */}
        <div className='typewriter'>
          <h1>
            How much <span className='energy-typewrite'>electricity</span> is
            generated with coal today?
          </h1>
        </div>
        <div className='typewriter2'>
          <h1>
            How close are we to clean{' '}
            <span className='energy-typewrite'>energy</span> production?
          </h1>
        </div>
      </div>
      <div className='welcome-container'>
        <div className='welcome-left'>
          <div className='caption-wrapper'>
            <img
              className='energy-pic'
              src={NuclearPic}
              alt='nuclear power plant'
            />
            <p className='caption'>Nuclear Power Plant Ohu, Bavaria, Germany</p>
          </div>
          <p className='energy-pic-text'>
            Get your answers based on live data from the
            <a href='https://www.smard.de/en'> German Federal Grid Agency</a>
            . <br /> <br/> <span id="caveat">Information comes in with a 90 minutes delay.</span>
          </p>
        </div>
        <div className='welcome-right'>
          <p className='energy-pic-text'>
            Make a guess and check your knowledge. <br/> Or see the results
            right away.
          </p>
          <div className='caption-wrapper'>
            <img className='energy-pic' src={WindPic} alt='wind turbine' />
            <p className='caption'>Wind Park in Rhinehessen, Germany</p>
          </div>
        </div>
        <div className='welcome-left'>
          <div className='caption-wrapper'>
            <img className='energy-pic' src={CoalPic} alt='coal power plant' />
            <p className='caption'>
              Lignite-Fired Power Plant in Bergheim, North Rhine-Westphalia,
              Germany
            </p>
          </div>
          <p className='energy-pic-text'>
            Then come back anytime and see how the energy mix has changed.
          </p>
        </div>
        {/* <div className='welcome-right'>
          <p className='energy-pic-text'>Proceed, have fun and learn!</p>
          <div className='caption-wrapper'>
            <img
              className='energy-pic'
              src={CoalPic}
              alt='coal-fired power plant'
            />
            <p className='caption'>
              Nuclear Power Plant Grohnde, Lower Saxony, Germany
            </p>
          </div>
        </div> */}
      </div>

      {/* <img id='gif' src={typingGIF} alt='Introductory gif' /> */}
      <div id='linker'>
        <Link to='/gameboard' id='innerLink' style={{ textDecoration: 'none' }}>
          <button id='link-button'>
            Proceed to game
            <img src={ChevronRight} alt='Chevron right' />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
