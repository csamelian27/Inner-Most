import React from "react";
import { Segment } from "semantic-ui-react";
import Chart from "chart.js";
import ReactChartkick, { LineChart, PieChart } from "react-chartkick";

class UserChart extends React.Component {
  state = {
    anger: 0,
    fear: 0,
    sadness: 0,
    surprise: 0,
    joy: 0,
    disgust: 0
  };

  componentDidMount() {
    this.props.emotions.map(emotion => {
      this.setState({
        anger: (this.state.anger += Math.round(
          emotion.emotion_scores.anger * 100
        )),
        fear: (this.state.fear += Math.round(
          emotion.emotion_scores.fear * 100
        )),
        sadness: (this.state.sadness += Math.round(
          emotion.emotion_scores.sadness * 100
        )),
        surprise: (this.state.surprise += Math.round(
          emotion.emotion_scores.surprise * 100
        )),
        joy: (this.state.joy += Math.round(emotion.emotion_scores.joy * 100)),
        disgust: (this.state.disgust += Math.round(
          emotion.emotion_scores.disgust * 100
        ))
      });
    });
  }

  getEmotions = () => {
    let output = [];
    let emotionsArr = [
      "anger",
      "fear",
      "sadness",
      "joy",
      "disgust",
      "surprise"
    ];
    let emotions = this.props.emotions;
    let tweets = this.props.tweets;
    for (let idx in emotionsArr) {
      let emotionTweet = {
        name: emotionsArr[idx],
        data: {}
      };
      for (let idx2 in emotions) {
        emotionTweet["data"][tweets[idx2]["created_at"]] =
          emotions[idx2]["emotion_scores"][emotionsArr[idx]];
      }
      output.push(emotionTweet);
    }
    return output;
  };

  render() {
    console.log("EMOTIONS", this.state);
    const data = [
      {
        name: "Anger",
        data: {
          "Thu Mar 28 03:59:31 +0000 2019": 2,
          "Thu Mar 28 03:59:31 +0000 2019": 4
        }
      },
      {
        name: "Fear",
        data: { "Thu Mar 28 03:59:31 +0000 2019": 0, "2017-01-02": 3 }
      },
      {
        name: "Sadness",
        data: { "Thu Mar 28 03:59:31 +0000 2019": 0, "2017-01-02": 3 }
      },
      {
        name: "Joy",
        data: { "Thu Mar 28 03:59:31 +0000 2019": 0, "2017-01-02": 3 }
      },
      {
        name: "Disgust",
        data: { "Thu Mar 28 03:59:31 +0000 2019": 0, "2017-01-02": 3 }
      },
      {
        name: "Surprise",
        data: { "Thu Mar 28 03:59:31 +0000 2019": 0, "2017-01-02": 3 }
      }
    ];
    const { anger, fear, sadness, surprise, disgust, joy } = this.state;
    return (
      <div>
        {" "}
        <PieChart
          id="pie-chart"
          options={{ events: ["click"] }}
          onClick={event => console.log(event.target)}
          data={[
            ["Anger", anger],
            ["Fear", fear],
            ["Sadness", sadness],
            ["Joy", joy],
            ["Disgust", disgust],
            ["Suprise", surprise]
          ]}
        />
        <Segment>
          <LineChart
            data={
              this.props.tweets.length === this.props.emotions.length &&
              this.props.emotions.length > 0
                ? this.getEmotions()
                : data
            }
          />
        </Segment>
      </div>
    );
  }
}
export default UserChart;
