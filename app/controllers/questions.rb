get '/questions' do
  @questions = Question.all
  erb :'/questions/index'
end

get '/questions/new' do
  erb:'/questions/new'
end

post '/questions' do
  require_login
  @question = Question.new(params[:question])
  @question.author = current_user
  # binding.pry
  if @question.save
    redirect "/questions/#{@question.id}"
  else
    @errors = @question.errors.full_messages
    erb:'/questions/new'
  end
end

get '/questions/:id' do
  @question = Question.find_by(id: params[:id])
  @answers = Answer.where(question_id: params[:id])
  @best_answer = @answers.find_by(id: @question.best_answer_id)
  erb :'/questions/show'
end

