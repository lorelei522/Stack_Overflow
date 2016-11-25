get '/questions' do
  @questions = Question.order(updated_at: :desc)
  erb :'/questions/index'
end

get '/questions/new' do
  erb:'/questions/new'
end

post '/questions' do
  require_login
  question = Question.new(params[:question])
  question.author = current_user
  if question.save
    redirect "/questions/#{question.id}"
  else
    @errors = question.errors.full_messages
    erb:'/questions/new'
  end
end

get '/questions/:id' do
  @question = Question.find_by(id: params[:id])
  @answers = Answer.where(question_id: params[:id])
  @best_answer = @answers.find_by(id: @question.best_answer_id)
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

put '/questions/:question_id/answers/:id' do
  question = Question.find_by(id: params[:question_id])
  question.update(best_answer_id: params[:id])
  redirect "questions/#{question.id}"
end
