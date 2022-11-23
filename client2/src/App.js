import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Gameboard from './components/Gameboard/Gameboard';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Header from './components/Header/Header';
// import WelcomePage from './components/WelcomePage/WelcomePage';
// import Header from './components/Header/Header';
// import ProgressBar from './components/ProgressBar/ProgressBar';
// import Footer from './components/Footer/Footer';
// import { useState, useEffect } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Loading from './components/Loading/Loading';
// import CountryEnergyMix from './components/CountryEnergyMix/CountryEnergyMix';

function App() {
  const [textForHeader, setTextForHeader] = useState('');
  // const [energyDataArr, setEnergyDataArr] = useState([]);
  // const [commonTime, setCommonTime] = useState();
  // const [pointsSet, setPointsSet] = useState({});
  // const [guessed, setGuessed] = useState(false);
  // const [loading, setLoading] = useState(true);

  // const fetchEnergyData = async () => {
  //   const url =
  //     'https://europe-west3-poweredcitizen.cloudfunctions.net/appEurope/testing';
  //   try {
  //     const start = Date.now();
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setEnergyDataArr(data.energySources);
  //     setCommonTime(data.commonTime);
  //     if (Date.now() - start > 1200) {
  //       setLoading(false);
  //     } else {
  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 1200 - (Date.now() - start));
  //     }
  //     console.log(data.energySources);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchEnergyData();
  // }, []);

  // const appStyle = {
  //   backgroundColor: `${loading ? 'white' : 'rgb(250, 246, 236)'}`,
  // };

  return (
    <div className='App' /* style={appStyle} */>
      <Routes>
        <Route path='/' element={<WelcomePage textForHeader={<h2 >
          The 34th-best blog about <span id="energy-span">energy</span> in Germany
        </h2>}/>} />
        <Route path='/gameboard' element={<Gameboard />} />
      </Routes>

      {/* {loading ? (
        <Loading />
      ) : (
        <>
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
      )} */}
    </div>
  );
}

export default App;
