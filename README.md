# Inner Most

## Contributors

Cassidy Samelian - https://github.com/csamelian27 | Jon Freed - https://github.com/jonfreed256
Lizzy Le - https://github.com/elizabethlemk | Edwin Lin - https://github.com/edwinlin
Shivani Brijmohan - https://github.com/sbrij001 | Content in the second column

## Design Statement
How might we improve the personal expression of emotionally distressed twitter users so they can recognize when their behavior is becoming negative? 

## Objective
Provide insight into a user’s emotional state by analyzing the word choices in their media posts. Using this information we create an easily digestible graph where we track the user’s emotional state over time.

## APIS
Twitter API - Allows Innermost to grab the supplied user’s last 20 tweets, which are then passed into the Emotion Analysis API. To run the program, a client must sign up for Twitter’s Consumer API key and API secret key. These two keys must then be run through:
```ruby
curl -u 'API key:API secret key' \
  --data 'grant_type=client_credentials' \
  'https://api.twitter.com/oauth2/token'
```
in the terminal, where a bearer token is returned. This bearer token must be passed into the header of the fetch request because Twitter requires OAuth to view any data.
https://developer.twitter.com/en/apps - Click 'Create an app' and fill out the form to get your API key and secret key.

Emotion Analysis API - Analyzes a paragraph of text against 6 emotional criterion -- Anger, Fear, Sadness, Joy, Disgust, Surprise -- and returns a value for each of those emotions. Each individual emotions is then charted for easy digestibility.

## Other Technologies
Blockstack - A blockchain solution to decentralizing user information and authentication, we are able to more securely protect users from having their private data stolen by security breaches. Innermost has implemented this exciting new technology into its authentication system.

## Demo
![alt text](https://github.com/csamelian27/Inner-Most/blob/master/public/Screen%20Shot%202019-04-13%20at%208.09.45%20PM.png?raw=true)
![alt text](https://github.com/csamelian27/Inner-Most/blob/master/public/Screen%20Shot%202019-04-13%20at%208.10.07%20PM.png?raw=true)
