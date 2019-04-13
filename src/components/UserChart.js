import React from 'react';
import Chart from 'chart.js';
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick';
<script src="https://www.gstatic.com/charts/loader.js"></script>
ReactChartkick.addAdapter(Chart)

class UserChart extends React.Component{
  state = {
    anger: 0,
    fear: 0,
    sadness: 0,
    surprise: 0,
    joy: 0,
    disgust: 0
  }

  componentDidMount(){
    console.log('ASLKDHFALKJSDHFLAKJSDHFAL', this.props.emotions);
    this.props.emotions.map(emotion => {
      console.log(emotion);
      console.log(emotion.emotion_scores);
      this.setState({
        anger: Math.round(emotion.emotion_scores.anger * 1000),
        fear: Math.round(emotion.emotion_scores.fear * 1000),
        sadness: Math.round(emotion.emotion_scores.sadness * 1000),
        surprise: Math.round(emotion.emotion_scores.surprise * 1000),
        joy: Math.round(emotion.emotion_scores.joy * 1000),
        disgust: Math.round(emotion.emotion_scores.disgust * 1000),
      })
    })
  }

  // getEmotions = () => {
  //   let output = []
  //   let emotionsArr = ['anger', 'fear', 'sadness', 'joy', 'disgust', 'surprise']
  //   let emotions = this.props.emotions
  //   let tweets = this.props.tweets
  //   for (let idx in emotionsArr) {
  //     let emotionTweet = {
  //       name: emotionsArr[idx],
  //       data: {}
  //     }
  //     for (let idx2 in emotions) {
  //       emotionTweet['data'][tweets[idx2]['created_at']] = emotions[idx2]['emotion_scores'][emotionsArr[idx]]
  //     }
  //     output.push(emotionTweet)
  //   }
  //   return output
  // }

  render(){
    console.log('PROPS',this.props);
    console.log('updated state', this.state);

    // const data = [
    //   {"name":"Anger", "data": {"Thu Mar 28 03:59:31 +0000 2019": 2, "Thu Mar 28 03:59:31 +0000 2019": 4}},
    //   {"name":"Fear", "data": {"Thu Mar 28 03:59:31 +0000 2019": 0, "2017-01-02": 3}},
    //   {"name":"Sadness", "data": {"Thu Mar 28 03:59:31 +0000 2019": 0, "2017-01-02": 3}},
    //   {"name":"Joy", "data": {"Thu Mar 28 03:59:31 +0000 2019": 0, "2017-01-02": 3}},
    //   {"name":"Disgust", "data": {"Thu Mar 28 03:59:31 +0000 2019": 0, "2017-01-02": 3}},
    //   {"name":"Surprise", "data": {"Thu Mar 28 03:59:31 +0000 2019": 0, "2017-01-02": 3}},
    // ];
    const { anger, fear, sadness, surprise, disgust, joy } = this.state
    return(
      <div>
        <PieChart data={[["Anger", anger], ["Fear", fear], ["Sadness", sadness], ["Joy", joy], ["Disgust", disgust], ["Suprise", surprise]]} />
      </div>
    )
  }
}
export default UserChart;


// <LineChart data={this.props.tweets.length === this.props.emotions.length && this.props.emotions.length > 0 ? this.getEmotions() : data} />
