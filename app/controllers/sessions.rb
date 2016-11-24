get '/sessions/new' do 
  erb :'/sessions/new'
end 

post '/sessions' do 
  user = User.find_by(email: params[:email])
  if user && user.authenticate(params[:password])
    session[:user_id] = user.id
    redirect "/users/#{user.id}"
  else
    @errors = user.errors.full_messages
    erb :'/sessions/new'
  end
end 


delete '/sessions' do 
  session.clear
  redirect '/'
end 