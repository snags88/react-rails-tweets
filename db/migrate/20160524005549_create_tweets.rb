class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.string :twid
      t.boolean :active
      t.string :author
      t.string :avatar
      t.text :body
      t.string :handle
      t.datetime :tweet_at
    end

    add_index :tweets, :tweet_at
  end
end
