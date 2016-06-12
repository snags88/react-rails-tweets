TweetStream.configure do |config|
  config.consumer_key       = ENV['TWITTER_API_KEY']
  config.consumer_secret    = ENV['TWITTER_API_SECRET']
  config.oauth_token        = ENV['TWITTER_OAUTH_TOKEN']
  config.oauth_token_secret = ENV['TWITTER_OAUTH_TOKEN_SECRET']
  config.auth_method        = :oauth
end
