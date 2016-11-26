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
