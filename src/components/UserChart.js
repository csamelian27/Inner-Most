import React from 'react';
import Chart from 'chart.js';
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick';
<script src="https://www.gstatic.com/charts/loader.js"></script>
ReactChartkick.addAdapter(Chart)

class UserChart extends React.Component{
  state = {
    data: []
  }

  getEmotions = () => {
    // this.props.emotions.map(emotion => {
    //   console.log('in the const anything', emotion)
    //   this.setState({
    //     anger: emotion.emotion_scores.anger,
    //     disgust: emotion.emotion_scores.disgust,
    //     fear: emotion.emotion_scores.fear,
    //     joy: emotion.emotion_scores.joy,
    //     sadness: emotion.emotion_scores.sadness,
    //     surprised: emotion.emotion_scores.surprised
    //   })
    // })
  }

  render(){
    console.log('PROPS',this.props);
    // this.props.map
    console.log('updated state', this.state);
    const dates = this.props.tweets.map(tweet => tweet.created_at)

    const data = [
      {"name":"Anger", "data": {"Thu Mar 28 03:59:31 +0000 2019": 2, "2017-01-02": 4}},
      {"name":"Fear", "data": {"Thu Mar 28 03:59:31 +0000 2019": 0, "2017-01-02": 3}},
      {"name":"Sadness", "data": {"Thu Mar 28 03:59:31 +0000 2019": 0, "2017-01-02": 3}},
      {"name":"Joy", "data": {"Thu Mar 28 03:59:31 +0000 2019": 0, "2017-01-02": 3}},
      {"name":"Disgust", "data": {"Thu Mar 28 03:59:31 +0000 2019": 0, "2017-01-02": 3}},
      {"name":"Surprise", "data": {"Thu Mar 28 03:59:31 +0000 2019": 0, "2017-01-02": 3}},
    ];

    return(
      <div>
        <h1>Chart Component</h1>
        <LineChart data={data} />
      </div>
    )
  }
}
export default UserChart;
