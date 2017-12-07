Rails.application.routes.draw do
  resources :taggings
  resources :tags
  resources :comments
  resources :tips
  # listing individual routes
  # get '/tips/new', to: 'tips#new'
  # get '/tips/:id', to: 'tips#show'
  # get '/tips', to: 'tips#index'
  # post '/tips', to: 'tips#create'
  # get '/tips/:id/edit', to: 'tips#edit'
  # put '/tips/:id', to: 'tips#update'
  get '/tips/:id/confirm_delete', to: 'tips#confirm_delete'
  # delete '/tips/:id', to: 'tips#destroy'
                # controller # action/method
                # pages_controller/rb # def about
  get '/about', to: 'pages#about'
                # pages_controller.rb # def contact
  get '/contact_us', to: 'pages#contact'
end
