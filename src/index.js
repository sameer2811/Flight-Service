const express = require('express');
const serverConfig = require('./config/server.config');


const app = express();


async function startServer() {
    app.listen(serverConfig.PORT, function () {
        console.log(`Server has started listening at PORT ${serverConfig.PORT}`);
    });
}


startServer();