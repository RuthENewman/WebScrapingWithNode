const request = require('request');
const cheerio = require('cheerio');

const mediumBlogURL = 'https://medium.com/@ruthnewman';

request('https://medium.com/@ruthnewman', (error,
  response, html) => {
  if(!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    const blogTitle = $('.cj');

      $('div h1').each((iteration, element) => {
        const blogTitle = $(element).text();
        console.log(blogTitle);
      })

    const blogLinks = []

    $('div a').each((iteration, element) => {
      const link = $(element).attr('href');

      if(!link.includes('signin') && !link.includes('upgrade') && link.length > 50) {
        blogLinks.push(link);
        
      }

    })

    let filteredLinks = (blogLinks) => blogLinks.filter((v, i) => blogLinks.indexOf(v) === i);
    const allLinks = filteredLinks(blogLinks)
    allLinks.forEach(link => console.log('Link at: ' + link))
  }
});
