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


