post '/questions/:id/votes' do 
  # binding.pry
  vote = Vote.new(voter_id: current_user.id, voteable_id: params[:id], voteable_type: params[:type], vote_direction: params[:vote].to_i)
  question = Question.find_by(id: params[:id])
  # binding.pry
  if vote.save && request.xhr?
  points = question.points
    # binding.pry
    content_type :json
    {points: points}.to_json
  else 
    # error_handling
    status 422
  end

end 