import './CountryEnergyMix.css';
import React from 'react';
import IconBar from '../IconBar/IconBar';
import { useState, useEffect } from 'react';
import germanFlagGif from '../../assets/Germany-l.gif';
import Up from '../../assets/Up.png';
import Down from '../../assets/Down.png';

function CountryEnergyMix({
  energyDataArr,
  guessed,
  setGuessed,
  pointsSet,
  setPointsSet,
}) {
  // const [energyDataArr, setEnergyDataArr] = useState([]);
  // const [guessed, setGuessed] = useState(false);
  // const [commonTime, setCommonTime] = useState();
  const [buttonVisible, setButtonVisible] = useState(true);

  function handleClick() {
    setButtonVisible(false);
    setGuessed(true);
    setPointsSet(100);
  }

  const buttonStyle = {
    // visibility: `${guessed && 'hidden'}`,
  };

  const mql = window.matchMedia('(max-width: 600px)');


  return (
    <div className='countryenergymix'>
      {/* <img id='german-flag' src={germanFlagGif} alt='fluttering German flag' /> */}
      {/*       license requirements flag missing!
      https://www.3dflagsplus.com/2015/11/germany-animated-flags-pictures.html
       */}
      {/*       license requirements smard missing!
       */}
      {/*       license requirements flaticon missing!
       */}
      <div id='arrow-container'>
        <p>Keep pressed to increase</p>
        <img className='arrow' src={Down} alt='arrow down' />
        <p>Keep pressed to decrease</p>
        <img className='arrow' src={Up} alt='arrow up' />
      </div>
      {mql.matches && (
        <div id='arrow-container-mobile'>
          <p>Press on items to increase</p>
          <img className='arrow' src={Down} alt='arrow' />
        </div>
      )}
      {mql.matches && (
        <div id='arrow-container-mobile2'>
          <p>Then scroll down for more</p>
          <img className='arrow' src={Up} alt='arrow' />
        </div>
      )}
      <ul id='icons-list'>
        {energyDataArr.map((energysource) => (
          <IconBar
            name={energysource[0]}
            mwhValue={energysource[1]}
            roundedValue={energysource[2]}
            guessed={guessed}
            pointsSet={pointsSet}
            setPointsSet={setPointsSet}
            key={energysource[0]}
          />
        ))}
      </ul>
      {buttonVisible && (
        <button id='guess' onClick={handleClick} style={buttonStyle}>
          Guess
        </button>
      )}
      {guessed && (
        <h3 className="success">
          Thanks for playing! For more informations, visit the{' '}
          <a id="sucess-a" href='https://www.smard.de/en'>German Federal Grid Agency's</a>{' '}
          page.
        </h3>
      )}
      {/* {guessed ? (
        <a href="https://www.smard.de/en">
        <button id='link-smard' >
          More Information ➡
        </button>
        </a>
      ) : (
        <button id='guess' onClick={handleClick} style={buttonStyle}>
          Guess
        </button>
      )} */}
    </div>
  );
}

export default CountryEnergyMix;
