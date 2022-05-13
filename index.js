const { program } = require("commander");
const initializeServer = require("./server");

const port = process.env.SERVER_PORT || process.env.PORT || 4000;
console.log(port);
program.option("-n, --name <name>", "Name");

program.parse();

console.log(program.opts());
initializeServer(port);
