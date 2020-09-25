Rails.application.routes.draw do
    namespace :api do
      namespace :v1 do
        resources :cities
        resources :users
        resources :rooftop_parks
        resources :favorites
      end
    end
end
