get '/questions/:question_id/answers/:answer_id/comments/new' do
  require_login
  @question = Question.find_by(id: params[:question_id])
  @answer = Answer.find_by(id: params[:answer_id])
  erb:'/comments/new'
end

post '/questions/:question_id/answers/:answer_id/comments' do
  require_login
  @question = Question.find_by(id: params[:question_id])
  @answer = Answer.find_by(id: params[:answer_id])
  comment = Comment.new(text: params[:comment], commentable_id: params[:answer_id], commentable_type: "Answer")
  comment.commenter = current_user
  if comment.save
    redirect "/questions/#{@question.id}"
  else
    @errors = comment.errors.full_messages
    erb:'/comments/new'
  end
end