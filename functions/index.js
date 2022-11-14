const functions = require('firebase-functions');
const api = require('./controller/smardApiData');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

('use strict');
const express = require('express');
const cors = require('cors');
// const path = require('path');
const appEurope = express();
// const router = require('./router.js');
// const PORT = process.env.PORT || 3001;

appEurope.use(cors());
appEurope.use(express.json());
appEurope.use(express.urlencoded({ extended: false }));

appEurope.get('/testing', api.getEnergyDataEurope);

//app.use('/', express.static(path.join(__dirname, 'client')));

// app.use(router);

// app.listen(PORT, () => {
//   console.log(`Server up and running at http://localhost:${PORT}`); // eslint-disable-line no-console
// });

exports.appEurope = functions.region('europe-west3').https.onRequest(appEurope);
