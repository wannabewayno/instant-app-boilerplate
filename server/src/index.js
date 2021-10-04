const { loadEnvs } = require('./utils/Setup');
const express = require('express');
const cors = require('cors');
const Router = require('./Router');

loadEnvs(); // loads environment variables from config/app.env

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(Router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
