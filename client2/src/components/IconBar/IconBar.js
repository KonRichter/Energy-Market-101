import './IconBar.css';
import React from 'react';
import { useState, useEffect, useRef } from 'react';

function IconBar({
  name,
  mwhValue,
  roundedValue,
  guessed,
  pointsSet,
  setPointsSet,
}) {
  const [counter, setCounter] = useState(0);
  const [preCounter, setPreCounter] = useState(300);

  const intervalRef = useRef(null);

  const barStyle = {
    paddingTop: `${counter * 4 + 10}px`,
    cursor: `${guessed && 'not-allowed'}`,
  };

  const buttonStyle = {
    // cursor: `${guessed && 'not-allowed'}`,
    visibility:  `${guessed && 'hidden'}`,
  };

  const lineStyle = {
    width: '100px',
    height: '1px',
    backgroundColor: 'black',
    borderRadius: '4px',
    opacity: `${guessed ? 1 : 0}`,
    position: 'absolute',
    bottom: `${preCounter + 196}px`,
    // transitionProperty: 'opacity',
    transition: 'opacity 800ms linear',
  };

  useEffect(() => {
    return () => stopCounter(); // when App is unmounted we should stop counter
  }, []);

  const startCounter = () => {
    if (intervalRef.current || guessed) return;
    let startTime = Date.now();
    intervalRef.current = setInterval(() => {
      if (Date.now() - startTime < 500) {
        setCounter((prevCounter) => {
          if (prevCounter < 100) {
            return Math.round((prevCounter + 0.1) * 10) / 10;
          } else {
            clearInterval(intervalRef.current);
            return Math.round(prevCounter);
          }
        });
        setPointsSet((prevPoints) => {
          if (counter < 100) {
            // console.log(prevPoints);
            // return {...prevPoints, name: Math.round((prevPoints.name + 0.1) * 10) / 10};
            // console.log((prevPoints[name] + 0.1) * 10) / 10;
            
            return {...prevPoints, [name]: prevPoints[name] === undefined ? 0 : Math.round((prevPoints[name] + 0.1) * 10) / 10}
          } else {
            // return Math.round(prevPoints.name);
            return {...prevPoints, [name]: 100}
          }
        });
        
      } 
      else {
        setCounter((prevCounter) => {
          if (prevCounter < 100) {
            return Math.round((prevCounter + 0.2) * 10) / 10;
          } else {
            clearInterval(intervalRef.current);
            return Math.round(prevCounter);
          }
        });
        setPointsSet((prevPoints) => {
          if (counter < 100) {
            return {...prevPoints, [name]: prevPoints[name] === undefined ? 0 : Math.round((prevPoints[name] + 0.2) * 10) / 10}
          } else {
            return {...prevPoints, [name]: 100}
          }
        });
      }
    }, 10);
    
  };
  

  const decreaseCounter = () => {
    if (intervalRef.current || guessed) return;
    let startTime = Date.now();
    intervalRef.current = setInterval(() => {
      if (Date.now() - startTime < 500) {
        setCounter((prevCounter) => {
          if (prevCounter > 0) {
            return Math.round((prevCounter - 0.1) * 10) / 10;
          } else {
            clearInterval(intervalRef.current);
            return Math.round(prevCounter);
          }
        });
        // setPointsSet((prevPoints) => {
        //   if (counter > 0) {
        //     return Math.round((prevPoints - 0.1) * 10) / 10;
        //   } else {
        //     return Math.round(prevPoints);
        //   }
        // });
        setPointsSet((prevPoints) => {
          if (counter > 0) {
            return {...prevPoints, [name]: Math.round((prevPoints[name] - 0.1) * 10) / 10}
          } else {
            return {...prevPoints, [name]: 0}
          }
        });

        //   setCounter((prevCounter) => {
        //     if (prevCounter > 0) {
        //       return prevCounter - 0.1;
        //     } else {
        //       return 0;
        //     }
        //   });
        // } else {
        //   setCounter((prevCounter) => {
        //     if (prevCounter > 0) {
        //       return prevCounter - 0.2;
        //     } else {
        //       return 0;
        //     }
        //   });
      } else {
        setCounter((prevCounter) => {
          if (prevCounter > 0) {
            return Math.round((prevCounter - 0.2) * 10) / 10;
          } else {
            clearInterval(intervalRef.current);
            return Math.round(prevCounter);
          }
        });
        // setPointsSet((prevPoints) => {
        //   if (counter > 0) {
        //     return Math.round((prevPoints - 0.2) * 10) / 10;
        //   } else {
        //     return Math.round(prevPoints);
        //   }
        // });
        setPointsSet((prevPoints) => {
          if (counter > 0) {
            return {...prevPoints, [name]: Math.round((prevPoints[name] - 0.2) * 10) / 10}
          } else {
            return {...prevPoints, [name]: 0}
          }
        });
      }
    }, 10);
  };
  
  const stopCounter = () => {
    if (intervalRef.current && !guessed) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setCounter((prevCounter) => {
        if (prevCounter < 100) {
          return prevCounter;
        }

        // if (Math.round(prevCounter) < 100) {
        //   return Math.round(prevCounter * 10) / 10;
        // }
        else {
          return 100;
        }
      });
    }
  };
  // const startCounter = () => {
  //   if (intervalRef.current || guessed) return;
  //   let startTime = Date.now();
  //   intervalRef.current = setInterval(() => {
  //     if (Date.now() - startTime < 500) {
  //       setCounter((prevCounter) => {
  //         if (prevCounter < 100) {
  //           return prevCounter + 0.1;
  //         } else {
  //           return 100;
  //         }
  //       });
  //     } else {
  //       setCounter((prevCounter) => {
  //         if (prevCounter < 100) {
  //           return prevCounter + 0.2;
  //         } else {
  //           return 100;
  //         }
  //       });
  //     }
  //   }, 10);
  // };

  // const decreaseCounter = () => {
  //   if (intervalRef.current || guessed) return;
  //   let startTime = Date.now();
  //   intervalRef.current = setInterval(() => {
  //     if (Date.now() - startTime < 500) {
  //       setCounter((prevCounter) => {
  //         if (prevCounter > 0) {
  //           return prevCounter - 0.1;
  //         } else {
  //           return 0;
  //         }
  //       });
  //     } else {
  //       setCounter((prevCounter) => {
  //         if (prevCounter > 0) {
  //           return prevCounter - 0.2;
  //         } else {
  //           return 0;
  //         }
  //       });
  //     }
  //   }, 10);
  // };

  // const stopCounter = () => {
  //   if (intervalRef.current && !guessed) {
  //     clearInterval(intervalRef.current);
  //     intervalRef.current = null;
  //     setCounter((prevCounter) => {
  //       if (Math.round(prevCounter) < 100) {

  //         return Math.round(prevCounter);
  //       } else {
  //         return 100;
  //       }
  //     });
  //   }
  // };

  useEffect(() => {
    if (guessed) {
      setPreCounter(counter * 4 + 10);
      if (intervalRef.current) return;
      intervalRef.current = setInterval(() => {
        setCounter((prevCounter) => {
          if (Math.round(prevCounter * 10) / 10 > roundedValue) {
            return prevCounter - 0.1;
          } else if (Math.round(prevCounter * 10) / 10 < roundedValue) {
            return prevCounter + 0.1;
          } else {
            clearInterval(intervalRef.current);
            return roundedValue;
          }
        });
      }, 10);
    }
  }, [guessed]);


  return (
    <div className='iconbar'>
      <hr style={lineStyle} />
      <img
        className='energy-icon'
        draggable='false'
        src={require(`../../assets/${name}.png`)}
        alt='energy icon'
        // onMouseDown={startCounter}
        onPointerDown={startCounter}
        // onMouseUp={stopCounter}
        onPointerUp={stopCounter}
        onPointerLeave={stopCounter}
        style={barStyle}
      />
      <span id='name-energy-source'>
        {name === 'NaturalGas' ? 'Natural Gas' : name}
      </span>
      <span>{Math.round(counter)}%</span>
      <br />
      
      <button
        onPointerDown={decreaseCounter}
        onPointerUp={stopCounter}
        onPointerLeave={stopCounter}
        style={buttonStyle}
      >
        Decrease
      </button>
    </div>
  );
}

export default IconBar;
