Rails.application.routes.draw do
  root 'application#hello'
   get '/signin' => 'sessions#new'
   post '/signin' => 'sessions#create'
   get '/auth/facebook/callback' => 'sessions#create'
   delete '/signout' => 'sessions#destroy'

   resources :users, only: [:show, :new, :create]
   resources :user_books, only: [:edit, :update]
   resources :books

   resources :authors do
    resources :books, only: [:show, :index, :new, :edit]
  end

end
