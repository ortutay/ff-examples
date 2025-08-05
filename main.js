import * as fox from 'fetchfox-sdk';

const main = async () => {
  fox.configure({
    apiKey: process.env.FETCHFOX_API_KEY,
    host: 'https://dev.api.fetchfox.ai',
  });
  process.exit(0);
}

main();
