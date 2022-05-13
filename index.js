const initializeServer = require("./server");

const port = process.env.SERVER_PORT ?? 4000;

initializeServer(port);
