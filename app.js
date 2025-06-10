const express = require('express');
const morgan = require('morgan');
const helloRouter = require('./routes/hello');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/hello', helloRouter);

// Démarrage serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
