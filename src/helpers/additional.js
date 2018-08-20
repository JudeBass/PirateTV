import { bold, yellow, red } from 'chalk';

const template = x => bold(`** ${x}`);

export default function additional(results) {
  return [
    ...results,
    {
      name: yellow(template('Show more')),
      value: '@@MORE',
    },
    {
      name: red(template('Search again')),
      value: '@@SEARCH',
    },
  ]
}
