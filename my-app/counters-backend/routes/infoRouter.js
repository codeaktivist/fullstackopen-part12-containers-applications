const express = require('express');
const router = express.Router();
const releaseHash = require('../release');

const ip = require('ip');

const timestamp = new Date().toISOString();

router.get('/env', (req, res) => {
  res.send(process.env.NODE_ENV.toString());
});

router.get('/ip', (req, res) => {
  res.send(ip.address());
});

router.get('/version', (req, res) => {
  res.send(releaseHash);
});

router.get('/timestamp', (req, res) => {
  res.send(timestamp.toString());
});
  
module.exports = router;