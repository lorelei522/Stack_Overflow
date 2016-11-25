users = 10.times.map do
  User.create!( :username   => Faker::Internet.user_name,
                :email      => Faker::Internet.email,
                :password   => 'password' )
end

questions = 20.times.map do
  Question.create!( title: Faker::Hipster.words((5..10).to_a.sample).join(" ").capitalize + "?",
                    description: Faker::Hipster.paragraph(3),
                    author_id: (1..10).to_a.sample )
end

comments = 100.times.map do
  Comment.create!( text: Faker::Hacker.say_something_smart,
                   commenter_id: (1..10).to_a.sample,
                   commentable_id: (1..20).to_a.sample,
                   commentable_type: ["Question", "Answer"].sample)
end

answers = 100.times.map do
  Answer.create!( text: Faker::Hacker.say_something_smart,
                  user_id: (1..10).to_a.sample,
                  question_id: (1..20).to_a.sample)
end

votes = 100.times.map do
  Vote.create(  voter_id: (1..10).to_a.sample,
                voteable_id: (1..100).to_a.sample,
                voteable_type: ["Question", "Answer", "Comment"].sample,
                vote_direction: [-1, 1].sample)
end