const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const router = require('./routes');
const cors = require('cors');

const { PORT } = process.env;

app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
