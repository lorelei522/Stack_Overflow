get '/questions/:id/answers/new' do
  require_login
  @question = Question.find_by(id: params[:id])
  if request.xhr?
    erb :'/answers/new', layout: false
  else
    erb :'/answers/new'
  end
end

post '/questions/:id/answers' do
  require_login
  question = Question.find_by(id: params[:id])
  @answer = Answer.new(text: params[:text], question_id: question.id, user_id: current_user.id)
  if @answer.save 
    if request.xhr?
      erb :'/_partials/_answer_partial', layout:false
    else
    redirect "/questions/#{question.id}"
    end
  else
    erb :'/answers/new'
  end
end

put '/questions/:question_id/answers/:id' do
  question = Question.find_by(id: params[:question_id])
  if current_user == question.author
    question.update(best_answer_id: params[:id])
  end
  redirect "questions/#{question.id}"
end
