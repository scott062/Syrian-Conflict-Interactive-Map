Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #format json option directs controller to jbuilder files instead of html.erb
  namespace :api, defaults: { format: :json } do
    resources :conflicts, only: [:index, :show]
  end
end
