const express = require('express');
const serverConfig = require('./config/server.config');
const apiRouter = require('./routes');
const app = express();

app.use(express.json());

app.use("/api", apiRouter);

async function startServer() {
    app.listen(serverConfig.PORT, function () {
        console.log(`Server has started listening at PORT ${serverConfig.PORT}`);
    });
}

startServer();