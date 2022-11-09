'use strict';
const router = require('express').Router();
const api = require('./controller/smardApiData');

// router.get('/startTime', api.getStartTime );
router.get('/energyData', api.getEnergyData );



// router.post('/messages', /* message.postMessage */ );
// router.delete('/messages/:id', /* message.deleteMessage */ );

module.exports = router;
