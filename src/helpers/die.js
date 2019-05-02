import { red, bold } from 'chalk';

export default function die(message) {
  console.log(`
    ${bold('PirateTV')}

    ${red('✘')} ${message}
  `);
  return;
}
