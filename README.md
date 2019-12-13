# Twitter ML Librarian bot

## Getting started
You will need a .env file with the following contents:

```
TWITTER_CONSUMER_KEY=***
TWITTER_CONSUMER_SECRET=***
TWITTER_ACCESS_TOKEN=***
TWITTER_ACCESS_TOKEN_SECRET=***

QUERY_STRING=my super awesome query string!,google,android

RANDOM_REPLY=Hi @${screenName} thanks for the follow! What are you working on today?|@${screenName} thanks for following! What are you working on today?

RESULT_TYPE=mixed
TWITTER_LANG=en

TWITTER_RETWEET_RATE=.1
TWITTER_SEARCH_COUNT=20
```

Created following this example: https://www.freecodecamp.org/news/easily-set-up-your-own-twitter-bot-4aeed5e61f7f/.