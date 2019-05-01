import React from "react";
import { Button, Container, Header, Icon, Form } from "semantic-ui-react";
import UserChart from "./UserChart";
require("dotenv").config();

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
    fetch(`${process.env.TWITTER_URL}/${this.state.username}.json?count=10`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_API_KEY}`
      }
    })
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
    let unirest = require("unirest");
    unirest
      .post(`${process.env.EMOTION_URL}`)
      .header("X-RapidAPI-Host", "twinword-emotion-analysis-v1.p.rapidapi.com")
      .header("X-RapidAPI-Key", `${process.env.EMOTION_API_KEY}`)
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
