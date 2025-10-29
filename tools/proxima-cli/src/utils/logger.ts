import chalk from 'chalk';

export class Logger {
  static info(message: string) {
    console.log(chalk.blue('ℹ'), message);
  }

  static success(message: string) {
    console.log(chalk.green('✓'), message);
  }

  static error(message: string) {
    console.log(chalk.red('✖'), message);
  }

  static warning(message: string) {
    console.log(chalk.yellow('⚠'), message);
  }

  static log(message: string) {
    console.log(message);
  }

  static heading(message: string) {
    console.log('\n' + chalk.bold.cyan(message) + '\n');
  }

  static subheading(message: string) {
    console.log(chalk.bold(message));
  }
}
