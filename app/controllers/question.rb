get '/questions' do
  @questions = Question.all
  erb :'/questions/index'
end

get '/questions/new' do
  erb:'/questions/new'
end


get '/questions/:id' do
  @question = Question.find_by(id: params[:id])
  @answers = Answer.where(question_id: params[:id])
  erb :'/questions/show'
end


get '/questions/:id/answers/new' do
  @question = Question.find_by(id: params[:id])
  erb :'/answers/new'
end

post '/questions/:id/answers' do
  question = Question.find_by(id: params[:id])
  answer = Answer.new(text: params[:text],
             question_id: question.id,
             user_id: current_user.id)

  if answer.save
    redirect "/questions/#{question.id}"
  else
    erb :'/answers/new'
  end
end
