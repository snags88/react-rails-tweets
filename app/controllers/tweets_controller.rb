class TweetsController < ApplicationController
  def index
    @tweets = Tweet.get_tweets
  end

  def paginate
    page = params[:page].to_i
    offset = params[:offset].to_i

    @tweets = Tweet.get_tweets(page, offset)
    render json: @tweets, status: 200
  end
end
