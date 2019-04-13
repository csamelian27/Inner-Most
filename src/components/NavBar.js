import React from "react";
import { Button, Container, Header, Icon, Form } from "semantic-ui-react";

class NavBar extends React.Component {
  state = {
    username: ""
  };

  handleChange = e => {
    this.setState({ username: e.target.value });
  };

  handleSubmit = () => {
    console.log(this.state.username);
  };

  checkEmotion = () => {
    var unirest = require("unirest");
    unirest
      .post("https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/")
      .header("X-RapidAPI-Host", "twinword-emotion-analysis-v1.p.rapidapi.com")
      .header(
        "X-RapidAPI-Key",
        "16cc5bd8dcmsh6907259db58b42cp1abd80jsn031467cd6f42"
      )
      .header("Content-Type", "application/x-www-form-urlencoded")
      .send(`text=I don't like to eat spinach or kale.`)
      .end(result => console.log(result.body));
  };

  render() {
    console.log(this.state);

    return (
      <Container textAlign="center" id="twitter-form">
        <Header as="h2" icon textAlign="center" inverted>
          <Header.Content id="logo">Inner Most</Header.Content>
          <Icon name="user" inverted />
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="type your twitter username"
            style={{ maxWidth: "200px" }}
          />
          <Button inverted> Submit </Button>
        </Form>
      </Container>
    );
  }
}

export default NavBar;
