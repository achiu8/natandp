Rails.application.routes.draw do
  root 'main#index'
  get 'admin' => 'admin#index'
  get 'login' => 'admin#login'
  post 'login' => 'admin#verify_login'
end
