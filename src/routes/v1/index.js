const express = require('express');
const airplaneRouter = require('./airplane-routes');
const cityRouter = require('./city-routes');
const airportRouter = require('./airport-routes');
const v1Router = express.Router();

v1Router.use("/airplanes", airplaneRouter);
v1Router.use("/cities", cityRouter);
v1Router.use("/airports", airportRouter);

v1Router.get("/ping", function (req, res) {
    return res.json({
        "ping": "pong"
    });
});

module.exports = v1Router