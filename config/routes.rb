Rails.application.routes.draw do
  resources :users

  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'

  delete '/logout', to: 'sessions#destroy'


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  get "/tracks", to: "tracks#index"
  get "/details", to: "details#show"

  get "/songid", to: "song_id#show"
  # post "/songid", to: "songId#create"
  # delete "/songid", to: "songId#destroy"

end
