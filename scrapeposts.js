const request = require('request');
const cheerio = require('cheerio');

const mediumBlogURL = 'https://medium.com/@ruthnewman';

request('https://medium.com/@ruthnewman', (error,
  response, html) => {
  if(!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

  
  }
});
