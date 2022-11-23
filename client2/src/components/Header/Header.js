import './Header.css';
import germanFlagGif from '../../assets/Germany-l.gif';
import logo from '../../assets/LogoLightning.svg';
import pretzel from '../../assets/Pretzel.png';
import beer from '../../assets/Beer.png';
import React from 'react';
import { useState } from 'react';

// license requirements missing: http://www.stickpng.com/img/food/pretzels/pretzel-salt-on-top-part
// license requirements missing: https://pngimg.com/image/2389

function Header({ textForHeader }) {
  const [counter, setCounter] = useState(0);
  const [beerCounter, setBeerCounter] = useState(false);
  const [animate, setAnimate] = useState(true);
  
  const mql = window.matchMedia('(max-width: 600px)');

  const timeOfDay = () => {
    const today = new Date();
    const currentHour = today.getHours();

    if (currentHour < 6 || currentHour > 22) {
      return 'tonight';
    } else if (currentHour >= 18) {
      return 'this evening';
    } else if (currentHour >= 12) {
      return 'this afternoon';
    } else if (currentHour >= 6) {
      return 'this morning';
    }
  };

  function handleFlagClick() {
    if (counter === 0) {
      setAnimate(true);
    }
    setCounter(counter + 1);
  }

  function handlePretzelClick() {
    setBeerCounter(true);
  }

  function handleBeerClick() {
    alert('You are German now.');
  }

  function handleAnimationEnd() {
    setCounter(0);
    setBeerCounter(false);
    setAnimate(false);
  }

  function refreshPage() {
    window.location.reload(false);
  }

  const headerStyle = {
    boxShadow: `${textForHeader && '0px 2px 7px 1px rgba(0,0,0,0.68)'}`,
  };


  return (
    <div className='header' style={headerStyle}>
      <div className='left'>
        {/* <img
          id='german-flag'
          onClick={handleFlagClick}
          src={germanFlagGif}
          alt='fluttering German flag'
        /> */}
        <img id='logo' src={logo} onClick={refreshPage} alt='PoweredCitizen' />
      </div>
      <div className="alternative-right">
         {textForHeader ? (
        textForHeader
      ) : (
        <h2>
          Guess <span id='time-span'>{timeOfDay()}</span>'s energy mix in
          Germany
        </h2>
      )}
      </div>
     
      <div className='right'>
        <img
          className={counter === 3 && animate ? 'move' : 'dontMove'}
          onAnimationEnd={handleAnimationEnd}
          onClick={handlePretzelClick}
          src={pretzel}
          alt='pretzel'
        />
        <img
          className={beerCounter && animate ? 'beerMove' : 'dontMove'}
          onAnimationEnd={handleAnimationEnd}
          onClick={handleBeerClick}
          src={beer}
          alt='beer'
        />
      </div>
    </div>
  );
}

export default Header;
