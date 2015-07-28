Rails.application.routes.draw do
  root 'main#angular'
  post 'create_guest' => 'main#create_guest'

  get 'admin' => 'admin#index'
  get 'login' => 'admin#login'
  post 'login' => 'admin#verify_login'
end
