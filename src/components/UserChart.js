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
    this.props.emotions.map(emotion => {

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

  render(){
    const { anger, fear, sadness, surprise, disgust, joy } = this.state
    return(
        <PieChart
        id='pie-chart'
        data={[["Anger", anger], ["Fear", fear], ["Sadness", sadness], ["Joy", joy], ["Disgust", disgust], ["Suprise", surprise]]} />
    )
  }
}
export default UserChart;


// <LineChart data={this.props.tweets.length === this.props.emotions.length && this.props.emotions.length > 0 ? this.getEmotions() : data} />
