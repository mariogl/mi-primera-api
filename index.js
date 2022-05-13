const { program } = require("commander");
const initializeServer = require("./server");

const port = process.env.SERVER_PORT ?? 4000;
program.option("-n, --name <name>", "Name");

program.parse();

console.log(program.opts());
initializeServer(port);
