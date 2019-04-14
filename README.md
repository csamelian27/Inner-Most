Read.md

##Overview
How might we improve personal expressions for emotionally distressed twitter users so that they become more aware of when their behavior is becoming negative? With Innermost we plan to analyze a user’s word choices in their media posts, and to provide insights into their emotional state. If the idea of the application doesn’t click immediately, do not worry! The different moving parts required to understand how to use them will fall into place as we move forward.

##Objectives 
Provide insight into a user’s emotional state by analyzing the word choices in their media posts. Using this information we create an easily digestible graph where we track the user’s emotional state over time.
About 40% of what we do day-in and day-out is purely out of habit. Many companies today design their products to be habit-forming, causing users’ to view these companies as the salvation to their problems. With enough frequency, a user will have developed a habit filled with many emotional triggers.

With this app we want to focus mainly on internal triggers. The emotions we experience color the perception of what we do and experience next. It turns out the most frequent internal triggers are negative emotions like boredom, fear and anger. These days we turn to technology with little or no conscious thought. Research has shown that people suffering from clinical depression check email more often, and in turn, because they feel down more often, they use email to boost their mood to get out of that negative state.

Social media companies like Instagram use this hidden psychology to change their users’ behavior so they will use these apps more. In our opinion we need to be very careful about how we apply these techniques because we are building the products that people take to bed with them every night. We believe we can use behavior-design for good. By understanding how we get hooked, we can break unwanted habits in our life. We are creating a product where people can live happier, healthier and more productive connected lives.

##APIS
Twitter API - Allows Innermost to grab the supplied user’s last 20 tweets, which are then passed into the Emotion Analysis API. To run the program, a client must sign up for Twitter’s Consumer API key and API secret key. These two keys must then be run through:

https://drive.google.com/open?id=15rAXG4iwl52FBT6Vkkit2JIOtHFmnHVH

in the terminal, where a bearer token is returned. This bearer token must be passed into the header of the fetch request because Twitter requires OAuth to view any data.

Emotion Analysis API - Analyzes a paragraph of text against 6 emotional criterion -- Anger, Fear, Sadness, Joy, Disgust, Surprise -- and returns a value for each of those emotions. Each individual emotions is then charted for easy digestibility.

