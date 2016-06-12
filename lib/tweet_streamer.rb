root = File.expand_path(File.join(File.dirname(__FILE__), '..'))
require File.join(root, 'config', 'environment')

log = File.join(root, 'log', 'stream.log')

TweetStream.configure do |config|
  config.consumer_key       = ENV['TWITTER_API_KEY']
  config.consumer_secret    = ENV['TWITTER_API_SECRET']
  config.oauth_token        = ENV['TWITTER_OAUTH_TOKEN']
  config.oauth_token_secret = ENV['TWITTER_OAUTH_TOKEN_SECRET']
  config.auth_method        = :oauth
end

daemon = TweetStream::Daemon.new('tweet_streamer', log_output: true)

daemon.on_inited do
  ActiveRecord::Base.connection.reconnect!
  ActiveRecord::Base.logger = Logger.new(File.open(log, 'a'))
end

daemon.track('learn.co') do |status|
  TweetCreator.execute(status)
end

