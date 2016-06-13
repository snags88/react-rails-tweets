class TweetsController < ApplicationController
  def index
    @tweets = Tweet.get_tweets
  end
end
