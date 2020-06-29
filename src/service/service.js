'use strict';

const {
  Cli
} = require(`./cli`);

const {
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  ExitCode
} = require(`./constants`);

const [command, ...args] = process.argv.slice(USER_ARGV_INDEX);

if (!command || !Cli[command]) {
  Cli[DEFAULT_COMMAND].run();
  process.exit(ExitCode.success);
}

Cli[command].run(...args);
