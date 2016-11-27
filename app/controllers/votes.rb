post '/questions/:id/votes' do
  if logged_in?
    vote = Vote.new(voter_id: current_user.id, voteable_id: params[:id], voteable_type: params[:type], vote_direction: params[:vote].to_i)
    question = Question.find_by(id: params[:id])
  end
  if vote && vote.save && request.xhr?
    points = question.points
    content_type :json
    {points: points}.to_json
  else
    status 422
  end
end

post '/answers/:id/votes' do
  if logged_in?
    vote = Vote.new(voter_id: current_user.id, voteable_id: params[:id], voteable_type: params[:type], vote_direction: params[:vote].to_i)
    answer = Answer.find_by(id: params[:id])
  end
  if vote && vote.save && request.xhr?
    points = answer.points
    content_type :json
    {points: points}.to_json
  else
    status 422
  end
end

post '/questions/:question_id/comments/:comment_id/votes' do
  if logged_in?
    vote = Vote.new(voter_id: current_user.id, voteable_id: params[:comment_id], voteable_type: params[:type], vote_direction: params[:vote].to_i)
    comment = Comment.find_by(commentable_type: "Question", commentable_id: params[:question_id]) 
  end
  if vote && vote.save && request.xhr?
    points = comment.points
    content_type :json
    {points: points}.to_json
  else
    status 422
  end
end


post '/answers/:answer_id/comments/:comment_id/votes' do
  if logged_in?
    vote = Vote.new(voter_id: current_user.id, voteable_id: params[:comment_id], voteable_type: params[:type], vote_direction: params[:vote].to_i)
    comment = Comment.find_by(commentable_type: "Answer", commentable_id: params[:answer_id]) 
    # binding.pry
  end
  if vote && vote.save && request.xhr?
    points = comment.points
    content_type :json
    {points: points}.to_json
  else
    status 422
  end
end
