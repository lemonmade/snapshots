// @flow
/* eslint no-console: off */

import chalk from 'chalk';

type LoggerOptionsType = {
  verbose?: boolean,
};

export class Logger {
  verbose: boolean;

  constructor({verbose = false}: LoggerOptionsType = {}) {
    this.verbose = verbose;
  }

  debug(message: string) {
    if (!this.verbose) { return; }
    console.log(`${chalk.gray('[debug]')} ${message}`);
  }

  log(message?: string) {
    console.log(message);
  }

  error(message: string) {
    console.error(message);
  }
}

export default function logger(options: LoggerOptionsType = {}) {
  return new Logger(options);
}