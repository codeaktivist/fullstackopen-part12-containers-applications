const express = require('express');
const router = express.Router();
const redis = require('../redis');

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* Redis todo counter */
router.get('/statistics', async (req, res) => {
  const redisCounter = await redis.getAsync('todoCounter')
  const todoCount = !Number(redisCounter) ? 0 : Number(redisCounter)
  res.json({ added_todos: todoCount })
})
  
module.exports = router;
