import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()

  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    })
  }
  // TODO: shouldComponentUpdate()

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.newTweets.length > 0)
    // return (nextProps.newTweets !== "")
    // return (this.state.tweets !== nextProps.newTweets)
  }

  // TODO: componentWillReceiveProps()

  componentWillReceiveProps(nextProps, nextState) {

        this.setState({
          tweets: [
            ...nextProps.newTweets,
            ...this.state.tweets
          ]
        });

    // const twt = this.state.tweets << nextProps.newTweets
    // this.setState({
    //   tweets: twt
    // })

  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
