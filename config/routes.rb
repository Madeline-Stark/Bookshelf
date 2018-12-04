Rails.application.routes.draw do
  root 'application#hello'
   get '/signin' => 'sessions#new'
   post '/signin' => 'sessions#create'
   delete '/signout' => 'sessions#destroy'

   resources :users, only: [:show, :new, :create]
   resources :books
   resources :user_books, only: [:new, :create]

   resources :authors do
    resources :books, only: [:show, :index, :new, :edit]
  end

end
