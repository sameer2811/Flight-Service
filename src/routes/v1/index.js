const express = require('express');
const v1Router = express.Router();

v1Router.get("/ping", function (req, res) {
    return res.json({
        "ping": "pong"
    });
});

module.exports = v1Router