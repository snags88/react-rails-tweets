class Tweet < ActiveRecord::Base
  def self.get_tweets(page=0, offset=0, limit=10)
    total_offset = limit * page + offset
    order('created_at DESC')
      .offset(total_offset)
      .limit(limit)
  end
end
