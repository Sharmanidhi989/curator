Rails.application.routes.draw do
  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
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
