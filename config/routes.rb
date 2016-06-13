Rails.application.routes.draw do
  root 'tweets#index'

  get '/api/v1/tweets' => 'tweets#paginate', as: 'tweets_paginate'
end
