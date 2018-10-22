const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Booyah', message: 'welcome to the world' })
  })
  
  module.exports = router;