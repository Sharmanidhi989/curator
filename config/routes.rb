Rails.application.routes.draw do
  get 'pages/index'
  namespace :api do
    namespace :v1 do
      resources :books, param: :slug
      resources :reviews, only: %w[create destroy]
    end
  end

  get '*path', to: 'pages#index', via: :all
  root 'pages#index'
end
