'use strict';

// exports.getStartTime = async (req, res) => {
//   try {
//     const url = `https://www.smard.de/app/chart_data/1223/DE/index_hour.json`;
//     const response = await fetch(url);
//     const data = await response.json();
//     const startTime = data.timestamps[data.timestamps.length - 1];
//     res.status(200);
//     res.send(startTime.toString());
//   } catch (err) {
//     res.sendStatus(500);
//     console.log(err);
//   }
// };
const getStartTime = async (req, res) => {
  const url = `https://www.smard.de/app/chart_data/1223/DE/index_hour.json`;
  const response = await fetch(url);
  const data = await response.json();
  return data.timestamps[data.timestamps.length - 1];
};

let commonTime;

const getBrownCoalAndSetCommonTime = async (req, res, startTime, energyData) => {
  const url = `https://www.smard.de/app/chart_data/1223/DE/1223_DE_quarterhour_${startTime}.json`;
  const response = await fetch(url);
  const data = await response.json();
  const freshData = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1][1] === null) {
        commonTime = arr[i][0];

        return arr[i][1];
      }
    }
  };
  energyData.brownCoal = freshData(data.series);
};

const getNuclear = async (req, res, startTime, energyData) => {
  const url = `https://www.smard.de/app/chart_data/1224/DE/1224_DE_quarterhour_${startTime}.json`;
  const response = await fetch(url);
  const data = await response.json();
  const freshData = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === commonTime) {
        return arr[i][1];
      }
    }
  };
  energyData.nuclear = freshData(data.series);
};

const getWindOffshore = async (req, res, startTime, energyData) => {
  const url = `https://www.smard.de/app/chart_data/1225/DE/1225_DE_quarterhour_${startTime}.json`;
  const response = await fetch(url);
  const data = await response.json();
  const freshData = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === commonTime) {
        return arr[i][1];
      }
    }
  };
  energyData.windOffshore = freshData(data.series);
};

const getWater = async (req, res, startTime, energyData) => {
  const url = `https://www.smard.de/app/chart_data/1226/DE/1226_DE_quarterhour_${startTime}.json`;
  const response = await fetch(url);
  const data = await response.json();
  const freshData = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === commonTime) {
        return arr[i][1];
      }
    }
  };
  energyData.water = freshData(data.series);
};

const getOtherConventionals = async (req, res, startTime, energyData) => {
  const url = `https://www.smard.de/app/chart_data/1227/DE/1227_DE_quarterhour_${startTime}.json`;
  const response = await fetch(url);
  const data = await response.json();
  const freshData = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === commonTime) {
        return arr[i][1];
      }
    }
  };
  energyData.otherConventionals = freshData(data.series);
};

const getOtherRenewables = async (req, res, startTime, energyData) => {
  const url = `https://www.smard.de/app/chart_data/1228/DE/1228_DE_quarterhour_${startTime}.json`;
  const response = await fetch(url);
  const data = await response.json();
  const freshData = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === commonTime) {
        return arr[i][1];
      }
    }
  };
  energyData.otherRenewables = freshData(data.series);
};

const getBiomass = async (req, res, startTime, energyData) => {
  const url = `https://www.smard.de/app/chart_data/4066/DE/4066_DE_quarterhour_${startTime}.json`;
  const response = await fetch(url);
  const data = await response.json();
  const freshData = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === commonTime) {
        return arr[i][1];
      }
    }
  };
  energyData.biomass = freshData(data.series);
};

const getWindOnshore = async (req, res, startTime, energyData) => {
  const url = `https://www.smard.de/app/chart_data/4067/DE/4067_DE_quarterhour_${startTime}.json`;
  const response = await fetch(url);
  const data = await response.json();
  const freshData = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === commonTime) {
        return arr[i][1];
      }
    }
  };
  energyData.windOnshore = freshData(data.series);
};

const getPhotovoltaics = async (req, res, startTime, energyData) => {
  const url = `https://www.smard.de/app/chart_data/4068/DE/4068_DE_quarterhour_${startTime}.json`;
  const response = await fetch(url);
  const data = await response.json();
  const freshData = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === commonTime) {
        return arr[i][1];
      }
    }
  };
  energyData.photovoltaics = freshData(data.series);
};

const getBlackCoal = async (req, res, startTime, energyData) => {
  const url = `https://www.smard.de/app/chart_data/4069/DE/4069_DE_quarterhour_${startTime}.json`;
  const response = await fetch(url);
  const data = await response.json();
  const freshData = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === commonTime) {
        return arr[i][1];
      }
    }
  };
  energyData.blackCoal = freshData(data.series);
};

const getPumpedStorageEnergy = async (req, res, startTime, energyData) => {
  const url = `https://www.smard.de/app/chart_data/4070/DE/4070_DE_quarterhour_${startTime}.json`;
  const response = await fetch(url);
  const data = await response.json();
  const freshData = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === commonTime) {
        return arr[i][1];
      }
    }
  };
  energyData.pumpedStorageEnergy = freshData(data.series);
};

const getNaturalGas = async (req, res, startTime, energyData) => {
  const url = `https://www.smard.de/app/chart_data/4071/DE/4071_DE_quarterhour_${startTime}.json`;
  const response = await fetch(url);
  const data = await response.json();
  const freshData = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === commonTime) {
        return arr[i][1];
      }
    }
  };
  energyData.naturalGas = freshData(data.series);
};

exports.getEnergyData = async (req, res) => {
  try {
    const startTime = await getStartTime(req, res);
    console.log('Start Time is: ' + startTime);
    const energyData = {};
    await getBrownCoalAndSetCommonTime(req, res, startTime, energyData);
    await getNuclear(req, res, startTime, energyData);
    await getWindOffshore(req, res, startTime, energyData);
    await getWater(req, res, startTime, energyData);
    await getOtherConventionals(req, res, startTime, energyData);
    await getOtherRenewables(req, res, startTime, energyData);
    await getBiomass(req, res, startTime, energyData);
    await getWindOnshore(req, res, startTime, energyData);
    await getPhotovoltaics(req, res, startTime, energyData);
    await getBlackCoal(req, res, startTime, energyData);
    await getPumpedStorageEnergy(req, res, startTime, energyData);
    await getNaturalGas(req, res, startTime, energyData);
    console.log('Common Time is: ' + commonTime);
    res.status(200);
    res.send(energyData);
  } catch (e) {
    console.log('Error: ', e);
    res.sendStatus(500);
  }
};
