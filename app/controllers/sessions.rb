get '/sessions/new' do
  erb :'/sessions/new'
end

post '/sessions' do
  user = User.find_by(email: params[:email])
  if user && user.authenticate(params[:password])
    session[:user_id] = user.id
    redirect "/users/#{user.id}"
  else
    @errors = ["Email and password did not match"]
    erb :'/sessions/new'
  end
end

delete '/sessions' do
  if logged_in?
    session.clear
  end
  redirect '/logout'
end

get '/logout' do
  erb :'logout'
end