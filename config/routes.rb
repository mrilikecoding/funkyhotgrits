Rails.application.routes.draw do
  root 'home#index'

  match '/contacts',     to: 'home#create_contact',             via: 'post'

  # resources "contacts", only: [:new, :create]

end
