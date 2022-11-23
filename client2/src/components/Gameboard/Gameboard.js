import "./Gameboard.css"
import React from 'react'
import WelcomePage from '../WelcomePage/WelcomePage';
import Header from '../Header/Header';
import ProgressBar from '../ProgressBar/ProgressBar';
import Footer from '../Footer/Footer';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CountryEnergyMix from '../CountryEnergyMix/CountryEnergyMix';

function Gameboard() {
  const [energyDataArr, setEnergyDataArr] = useState([]);
  const [commonTime, setCommonTime] = useState();
  const [pointsSet, setPointsSet] = useState({});
  const [guessed, setGuessed] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchEnergyData = async () => {
    // const url = "http://localhost:3001/energyData"
    const url =
      'https://europe-west3-poweredcitizen.cloudfunctions.net/appEurope/testing';
    try {
      const start = Date.now();
      const res = await fetch(url);
      const data = await res.json();
      setEnergyDataArr(data.energySources);
      setCommonTime(data.commonTime);
      if (Date.now() - start > 1200) {
        setLoading(false);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 1200 - (Date.now() - start));
      }
      console.log(data.energySources);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEnergyData();
  }, []);


  return (
    <div className="gameboard">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <ProgressBar pointsSet={pointsSet} guessed={guessed} />
          <CountryEnergyMix
            energyDataArr={energyDataArr}
            pointsSet={pointsSet}
            setPointsSet={setPointsSet}
            guessed={guessed}
            setGuessed={setGuessed}
          />
          <Footer />
        </>
      )}
    </div>
  )
}

export default Gameboard