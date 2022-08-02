Rails.application.routes.draw do
  resources :users

  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get "/tracks", to: 'tracks#test'
  get "/tracks/:s", to: "tracks#search"

  get "/details/:id", to: "details#show"

  get '/favorites', to: 'favorites#index'
  get 'favorites/:songId', to: 'favorites#show'
  post '/favorites', to: 'favorites#add'
  delete '/favorites/:songId', to: 'favorites#destroy'
 

end
