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

const getBrownCoalAndSetCommonTime = async (
  startTime,
  energyData
) => {
  const url = `https://www.smard.de/app/chart_data/1223/DE/1223_DE_quarterhour_${startTime}.json`;
  const response = await fetch(url);
  const data = await response.json();
  const freshData = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1][1] === null) {
        commonTime = arr[i][0] - 900000;
        return arr[i-1][1];
      }
    }
  };
  // energyData.brownCoal = freshData(data.series);
  energyData.energySources.push(
    ["Coal", freshData(data.series)]
    )
  energyData.commonTime = commonTime;
};

const getNuclear = async ( startTime, energyData) => {
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
  // energyData.nuclear = freshData(data.series);
  energyData.energySources.push(
    ["Nuclear", freshData(data.series)]
    )
};

const getWindOffshore = async ( startTime, energyData) => {
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
  // energyData.windOffshore = freshData(data.series);
  energyData.energySources.push(
    ["Wind", freshData(data.series)]
    )
};

const getWater = async ( startTime, energyData) => {
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
  // energyData.water = freshData(data.series);
  energyData.energySources.push(
    ["Hydro", freshData(data.series)]
    )
};

const getOtherConventionals = async ( startTime, energyData) => {
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
  // energyData.otherConventionals = freshData(data.series);
  energyData.energySources.push(
    ["Others", freshData(data.series)]
    )
};

const getOtherRenewables = async (startTime, energyData) => {
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
  // energyData.otherRenewables = freshData(data.series);
  energyData.energySources[7][1] += freshData(data.series)
  
};

const getBiomass = async (startTime, energyData) => {
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
  // energyData.biomass = freshData(data.series);
  energyData.energySources.push(
    ["Biomass", freshData(data.series)]
    )
};

const getWindOnshore = async (startTime, energyData) => {
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
  // energyData.windOnshore = freshData(data.series);
  energyData.energySources[2][1] += freshData(data.series)
};

const getPhotovoltaics = async ( startTime, energyData) => {
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
  // energyData.photovoltaics = freshData(data.series);
  energyData.energySources.push(
    ["Solar", freshData(data.series)]
    )
};

const getBlackCoal = async (startTime, energyData) => {
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
  // energyData.blackCoal = freshData(data.series);
  energyData.energySources[0][1] += freshData(data.series)

};

const getPumpedStorageEnergy = async ( startTime, energyData) => {
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
  // energyData.pumpedStorageEnergy = freshData(data.series);
  energyData.energySources[7][1] += freshData(data.series)
};

const getNaturalGas = async (startTime, energyData) => {
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
  // energyData.naturalGas = freshData(data.series);
  energyData.energySources.push(
    ["NaturalGas", freshData(data.series)]
    )
};

const roundByLargestRemainder = (arr) => {
    let sum = 0;
    let valuePartsArr = arr.map((value, index) => {
      // Get rounded down integer values.
      
      let integerValue = Math.floor(value[2]);
      sum += integerValue;
      return {
          energySource: value[0],
          mwhValue: value[1],
          integer: integerValue, // Integer part of the value
          decimal: value[2] % 1, // Decimal part of the value
          originalIndex: index  // Used to return values in original order.
      }
    })
 
    if (sum != 100) {
      // Sort values by decimal part
      // console.log("Unsorted: " + valuePartsArr[0].energySource);
      
      valuePartsArr = valuePartsArr.sort((x,y) => y.decimal - x.decimal);
      // console.log("Sorted: " + valuePartsArr[0].energySource);
      
      const diff = 100 - sum;
      let i = 0;
 
      // Distribute the difference.
      while (i < diff) {
        valuePartsArr[i].integer++;
        i++;
      }
    }
    
    return valuePartsArr.sort((x,y) => x.originalIndex - y.originalIndex).map(p => [p.energySource, p.mwhValue, p.integer]);
  
}

const calculateRoundedValues = (energyData) => {
  // console.log(energyData.energySources[3][0]);
  // energyData.energySources[3][1] = 0;
  let sumMWh = 0;
  for (let i = 0;i<energyData.energySources.length; i++) {
    sumMWh+=energyData.energySources[i][1];
  }
  // console.log("MWh Total: " + sumMWh);
  for (let i = 0;i<energyData.energySources.length; i++) {
    energyData.energySources[i].push(energyData.energySources[i][1]/sumMWh*100)
    // console.log("Bruchteil ist: " +energyData.energySources[i][0] + energyData.energySources[i][1]/sumMWh*100 )
  }
  energyData.energySources = roundByLargestRemainder(energyData.energySources);
  const checkSum = (arr) => {
    let sum = 0;
    for (let i = 0; i<arr.length; i++) {
      sum += energyData.energySources[i][2]
    } 
    return sum;
  }
  console.log(checkSum(energyData.energySources));
  
}

exports.getEnergyData = async (req, res) => {
  try {
    const startTime = await getStartTime(req, res);
    console.log('Start Time is: ' + startTime);
    const energyData = {energySources: []};
    await getBrownCoalAndSetCommonTime( startTime, energyData);
    await getNuclear(startTime, energyData);
    await getWindOffshore( startTime, energyData);
    await getPhotovoltaics( startTime, energyData);
    await getBiomass(startTime, energyData);
    await getNaturalGas( startTime, energyData);
    await getWater(startTime, energyData);
    await getOtherConventionals( startTime, energyData);
    await getOtherRenewables( startTime, energyData);
    await getWindOnshore(startTime, energyData);
    await getBlackCoal( startTime, energyData);
    await getPumpedStorageEnergy(startTime, energyData);
    console.log('Common Time is: ' + commonTime);
    calculateRoundedValues(energyData);
    res.status(200);
    res.send(energyData);
  } catch (e) {
    console.log('Error: ', e);
    res.sendStatus(500);
  }
};
