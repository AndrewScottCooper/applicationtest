const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect(
    "mongodb://localhost:27017/",
    {
      dbName: "jubotestdb",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) =>
      err ? console.log(err) : console.log(
        "Connected to jubotestdb database")
  );

  const ordersRouter = require('./routes/orders');
  const patientsRouter = require('./routes/patients');

  app.use('/oders', ordersRouter);
  app.use('/patients', patientsRouter);
  
  console.log("App listen at port 5000");