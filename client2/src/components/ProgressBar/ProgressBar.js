import './ProgressBar.css';
import React from 'react';

function ProgressBar({ pointsSet, guessed }) {

  
  let summedUpPoints = Object.values(pointsSet).reduce((a, b) => Math.round(a) + Math.round(b), 0)
  // console.log(summedUpPoints);

  const mql = window.matchMedia('(max-width: 600px)');
  
  const progressBarStyle = {
    // width: `${(guessed || pointsSet > 100) ? 100 : (5 + pointsSet*(95/100)) }%`,
    width: `${mql.matches ? (guessed || summedUpPoints > 100) ? 101 : (13 + summedUpPoints*(86/100)) : (guessed || summedUpPoints > 100) ? 101 : (5 + summedUpPoints*(96/100)) }%`,
    transition: "width 0.1s linear"
  };

  
  return (
    <div className='progressbar'>
      <div id="inner-progess-bar" style={progressBarStyle}>
        {/* <span>{Math.round(pointsSet)>100 ? (Math.round(pointsSet)+ "% - " + "You distributed more than 100%") : Math.round(pointsSet)+ "%"}</span> */}
        <span>{guessed ? "100%" : Math.round(summedUpPoints)>100 ? (Math.round(summedUpPoints)+ "% - " + "You distributed more than 100%") : Math.round(summedUpPoints)+ "%"}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
