const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Bonjour depuis l’API Express!' });
});

module.exports = router;
