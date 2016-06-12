class TweetCreator
  class << self
    def execute(status)
      Tweet.find_or_initialize_by(twid: status.id).tap do |tweet|
        tweet.twid = status.id
        tweet.active = false
        tweet.author = status.user.name
        tweet.avatar = status.user.profile_image_url.to_s
        tweet.body = status.text
        tweet.tweet_at = status.created_at
        tweet.handle = status.user.screen_name

        tweet.save!
      end
    end
  end
end
