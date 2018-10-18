import fetch from 'isomorphic-fetch';

// TODO: will come from setup
const config = {
  url: 'https://pirateproxy.gdn',
};

export default async function get({ search, page }) {
  const request = await fetch(`${config.url}/search/${search}/${page}/99`);
  return request.text();
}

