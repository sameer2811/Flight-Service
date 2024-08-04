const express = require('express');
const serverConfig = require('./config/server.config');
const apiRouter = require('./routes');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/api", apiRouter);

async function startServer() {
    app.listen(serverConfig.PORT, function () {
        console.log(`Server has started listening at PORT ${serverConfig.PORT}`);
    });
}

startServer();