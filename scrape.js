const request = require('request');
const cheerio = require('cheerio');

const mediumBlogURL = 'https://medium.com/@ruthnewman';

request('https://medium.com/@ruthnewman', (error,
  response, html) => {
  if(!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    const blogTitle = $('.cj');
    const blogContent = $('section');


    // console.log(blogTitle.html());
    // console.log(blogTitle.text());

    const blogContentChildren = blogContent.children('div');

    const blogContentGrandChildren = blogContentChildren.children('h1');
        console.log(blogContentGrandChildren.text());
    // const bloggerName = blogTitle.children('h1')
    // console.log(bloggerName.text())
  }
});
