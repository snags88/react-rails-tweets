# Rails + React Tweet Streamer

This app is intended to listen to a tweet stream and push updates to the
client for a live feed.

## Running the app
In development, you can start the app by running

```
$ bundle
$ rails server
```

On a separate session, you will want to start the Tweetstream listener

```
$ ruby lib/tweet_streamer.rb run
```

This will output a PID. If you want to stop the background job, kill the
process by running

```
$ kill pid
```

where `pid` is the process id provided by the output above.

## Technologies
Below are the different technologies used.

### Tweetstream
Tweetstream gem allows you to easily listen on tweetstream updates. It
also has a built in daemonizer to easily run the process in parallel
with the rails app.

To configure what the stream is listening to, set the search keyword in
`lib/tweet_streamer.rb`. Alternatively, you can change to follow
specific users by their twitter uid.

For more information on the gem, visit the [GitHub
page](https://github.com/tweetstream/tweetstream).

