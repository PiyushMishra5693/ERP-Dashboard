const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorMiddleware');
const logRequest = require('./middlewares/logMiddleware');
require('dotenv').config();

const app = express();

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

app.use(express.json());
app.use(logRequest);
app.use('/api', routes);
app.use(errorHandler);

const port = config.port;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
