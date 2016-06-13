var Tweet = React.createClass({
  render: function render() {
    var tweet = this.props.tweet;

    return (
      <li className={"tweet" + (tweet.active ? ' active': '')}>
        <img src={tweet.avatar} className="avatar" />
        <blockquote>
          <cite>
            <a href={"http://www.twitter.com/" + tweet.handle}>
              {tweet.author}
            </a>
            <span className="screen-name">@{tweet.handle}</span>
          </cite>
          <span className="content">{tweet.body}</span>
        </blockquote>
      </li>
    );
  }
});

var Tweets = React.createClass({
  render: function render () {
    var contents = this.props.tweets.map(function(tweet) {
      return (
        <Tweet key={tweet.twid} tweet={tweet} />
      );
    });

    return (
      <ul className="tweets">
        {contents}
      </ul>
    );
  }
});
