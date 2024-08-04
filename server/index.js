require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path')

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);

app.use(errorHandler);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'server working' })
})

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync()
    app.listen(PORT, () => {
      console.log('start server on port', PORT);
      console.log(`http://localhost:${PORT}`);
    })
  } catch (error) {
    console.log(error);
  }
}

start();
