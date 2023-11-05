// import required modules
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
// const { Item } = require('./models');

const cwd = process.cwd();
const PORT = process.env.PORT || 3001;
// create an express application
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}.`);
  });
});
