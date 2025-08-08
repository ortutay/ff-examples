import * as fox from 'fetchfox-sdk';

// Shared template across extracts
const template = {
  eventName: 'Name of the event (in English)',
  eventDate: 'Date of the event, format YYYY-MM-DD',
};

const maxUrls = 10;

const varesenews = async () => {
  const crawlResp = await fox.crawl({
    pattern: 'https://www.varesenews.it/202*/*/*/*/',
    startUrls: [
      'https://www.varesenews.it/cosa-fare-weekend-varese-eventi/',
      'https://www.varesenews.it/cosa-fare-weekend-varese-eventi/page/{{1..10}}/',
    ],
    maxDepth: 0,
    maxVisits: 10,
  });

  console.log('Crawl:', crawlResp);
  console.log('Hits:', crawlResp.results.hits);

  const extractResp = await fox.extract({
    urls: crawlResp.results.hits.slice(0, maxUrls),
    template,
  });

  console.log('Extract:', extractResp);
  console.log('Items:', extractResp.results.items);
}

const lombardia = async () => {
  const crawlResp = await fox.crawl({
    pattern: 'https://www.in-lombardia.it/it/evento/*',
    startUrls: [
      'https://www.in-lombardia.it/it/eventi?where=3015:45.8176,8.8264&location=Varese%20(Provincia)'
    ],
    maxDepth: 0,
    maxVisits: 10,
    interact: true,
  });

  console.log('Crawl:', crawlResp);
  console.log('Hits:', crawlResp.results.hits);

  const extractResp = await fox.extract({
    urls: crawlResp.results.hits.slice(0, maxUrls),
    template
  });

  console.log('Extract:', extractResp);
  console.log('Items:', extractResp.results.items);
}

const main = async () => {
  fox.configure({
    apiKey: process.env.FETCHFOX_API_KEY,
  });

  await varesenews();

  await lombardia();

  process.exit(0);
}

main();
