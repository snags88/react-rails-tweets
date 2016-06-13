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
    window.addEventListener('scroll', this.checkWindowScroll);
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
  },

  checkWindowScroll: function checkWindowScroll () {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var s = document.body.scrollTop;
    var scrolled = (h + s) > document.body.offsetHeight;

    if(scrolled && !this.state.paging && !this.state.done) {
      this.setState({paging: true, page: this.state.page + 1});
      this.getPage(this.state.page);
    }
  },

  getPage: function getPage(page) {
    var self = this;

    $.get('/api/v1/tweets', {page: page, offset: this.state.skip})
      .done(function(data) {
        self.loadPagedTweets(data);
      })
      .fail(function() {
        self.setState({paging: false, done: true});
      })
  },

  loadPagedTweets: function loadPagedTweets (tweets) {
    var self = this;

    if (tweets.length > 0) {
      var currentTweets = this.state.tweets;
      tweets.forEach(function(tweet) {
        currentTweets.push(tweet);
      });

      setTimeout(function() {
        self.setState({tweets: currentTweets, paging: false});
      }, 1000)
    } else {
      this.setState({paging: false, done: true});
    }
  }
});
