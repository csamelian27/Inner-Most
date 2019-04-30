import React from "react";
import { Button, Container, Header, Icon, Form } from "semantic-ui-react";
import UserChart from "./UserChart";
// const ToneAnalyzerV3 = require("ibm-watson/tone-analyzer/v3");
//
// const toneAnalyzer = new ToneAnalyzerV3({
//   version: "2017-09-21",
//   iam_apikey: "njg1mJlIteAuZ1Gxq5w_YAXRjrygQ_5AICWmnkKptMKX",
//   url: "https://gateway-wdc.watsonplatform.net/tone-analyzer/api"
// });

class Home extends React.Component {
  state = {
    username: "",
    tweets: [],
    emotions: []
  };

  handleChange = e => {
    this.setState({ username: e.target.value });
  };

  handleSubmit = () => {
    console.log("bob", this.state.username);
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline/${
        this.state.username
      }.json?count=10`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer AAAAAAAAAAAAAAAAAAAAAKik9wAAAAAAeEy8mNdChB3cu0SaakLzTJvOiJk%3Dl39cr6lRLidFjMwu4d5LVWHZrw312YT4k08OpCrApjw8NERmvG"
        }
      }
    )
      .then(resp => resp.json())
      .then(tweets => {
        let userTweets = [];
        tweets.forEach(tweet => userTweets.push(tweet.text));
        this.setState({
          tweets: userTweets
        });
        userTweets.forEach(tweet => this.checkEmotion(tweet));
      });
  };

  checkEmotion = tweet => {
    // toneAnalyzer.tone(
    //   {
    //     tone_input: tweet,
    //     content_type: "text/plain"
    //   },
    //   function(err, tone) {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log(JSON.stringify(tone, null, 2));
    //     }
    //   }
    // );

    var unirest = require("unirest");

    unirest
      .post("https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/")
      .header("X-RapidAPI-Host", "twinword-emotion-analysis-v1.p.rapidapi.com")
      .header(
        "X-RapidAPI-Key",
        "16cc5bd8dcmsh6907259db58b42cp1abd80jsn031467cd6f42"
      )
      .header("Content-Type", "application/x-www-form-urlencoded")
      .send(`text=${tweet}`)
      .end(emotion => {
        console.log(emotion, tweet);
        this.setState({ emotions: [...this.state.emotions, emotion.body] });
      });
  };

  render() {
    console.log(this.state);
    return (
      <Container textAlign="center" id="twitter-form" text>
        <Header as="h2" icon textAlign="center" inverted>
          <Header.Content id="logo">inner most</Header.Content>
          <Icon name="user" inverted />
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            id="twitter-input"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="type your twitter username"
            style={{ maxWidth: "500px" }}
          />
          <Button inverted> Submit </Button>
          {this.state.emotions.length === this.state.tweets.length &&
          this.state.emotions.length > 0 ? (
            <UserChart
              changeGradient={this.props.changeGradient}
              emotions={this.state.emotions}
              tweets={this.state.tweets}
            />
          ) : null}
        </Form>
      </Container>
    );
  }
}

export default Home;
