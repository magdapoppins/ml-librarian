// listen on port so now.sh likes it
const { createServer } = require('http')

// Twitter api and config
const Twit = require('twit')
const config = require('./config')

// For le scrapes
const rp = require('request-promise');
const $ = require('cheerio');

const bot = new Twit(config.twitterKeys)
//const suggestions_json = require('./reads.json')
//const retweet = require('./api/retweet')
//const reply = require('./api/reply')
const counter = 0

//const make_tweet_from_suggestion = () => {
//  const random_suggestion = suggestions_json.suggestions[Math.floor(Math.random()*suggestions_json.suggestions.length)]
//  return `📖 ${random_suggestion.note} ${random_suggestion.link}`
//}

const tweet_random_suggestion = async () => {
  counter++
  bot.post('statuses/update', { status: `Day #{counter} of bot testing...` + await get_nice_article() }, function(err, data, response) {
    console.log(data)
  })
}


// Do some scrapes:

const get_nice_article = async () => {
  const paperswithcode_url = 'https://paperswithcode.com';
    
  try {
    const html = await rp(paperswithcode_url);
      // Author
      const author = $('.item-content > .author-section > a', html)[0].children[0].data
      // Abstract
      const abstract = $('.item-content > .item-strip-abstract', html)[0].children[0].data
      // Get link (url + ...)
      const link = paperswithcode_url + $('.item-interact > .entity > a', html)[0].attribs.href
      
      return `${author} 📝: ${abstract} ${link}`
    } catch (err) {
      //handle error
    }
}

// Daily tweets

setInterval(tweet_random_suggestion, 86400000)

// This will allow the bot to run on now.sh
const server = createServer((req, res) => {
  res.writeHead(302, {
    Location: `https://twitter.com/${config.twitterConfig.username}`
  })
  res.end()
})

server.listen(3000)
