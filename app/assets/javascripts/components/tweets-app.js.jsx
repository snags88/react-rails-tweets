var TweetsApp = React.createClass({
  render: function render () {
    this.showTweets(this.state.tweets);

    return (
      <div className="tweets-app">
        <Tweets tweets={this.state.tweets} />
        <Loader paging={this.state.paging} />
        <NotificationBar count={this.state.count} onShowNewTweets={this.showNewTweets} />
      </div>
    );
  },

  getInitialState: function getInitialState (props) {
    var props = props || this.props;

    return {
      tweets: props.tweets,
      count: 0,
      page: 0,
      paging: false,
      skip: 0,
      done: false
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps (newProps, oldProps) {
    this.setState(this.getInitialState(newProps));
  },

  componentDidMount: function componentDidMount () {
    this.showTweets(this.state.tweets);
  },

  showTweets: function showTweets (tweets) {
    tweets.forEach(function(tweet) {
      tweet.active = true;
    });
  },

  showNewTweets: function showNewTweets () {
    var updated = this.state.tweets;

    this.showTweets(updated);
    this.setState({tweets: updated, count: 0});
  }
});
