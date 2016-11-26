$(document).ready(function() {
  $(".question").on("click", ".vote-up", function(event){
    var vote = 1;
    var questionId = $(this).closest("div").attr("id")
    var url = "/questions/" + questionId + "/votes"
    $.ajax({
      url: url,
      method: "post",
      data: {"type": "Question", "vote": vote}
    }).done(function(response){
      $("div#" + questionId).find(".vote-up").css("color", "red")
      $("div#" + questionId).find(".points").text(response["points"])
    }).fail(function(response){
      alert("You must be logged in to vote");
    });
  });

  $(".question").on("click", ".vote-down", function(event){
    var vote = -1;
    var questionId = $(this).closest("div").attr("id")
    var url = "/questions/" + questionId + "/votes"
    $.ajax({
      url: url,
      method: "post",
      data: {"type": "Question", "vote": vote}
    }).done(function(response){
      $("div#" + questionId).find(".vote-down").css("color", "blue")
      $("div#" + questionId).find(".points").text(response["points"])
    }).fail(function(response){
      alert("You must be logged in to vote");
    });
  });

  $(".answer").on("click", ".vote-up", function(event){
    var vote = 1;
    var answerId = $(this).closest("div").attr("id")
    var url = "/answers/" + answerId + "/votes"
    $.ajax({
      url: url,
      method: "post",
      data: {"type": "Answer", "vote": vote}
    }).done(function(response){
      $("div#" + answerId).find(".vote-up").css("color", "red")
      $("div#" + answerId).find(".points").text(response["points"])
    }).fail(function(response){
      alert("You must be logged in to vote");
    });
  });

  $(".answer").on("click", ".vote-down", function(event){
    var vote = -1;
    var answerId = $(this).closest("div").attr("id")
    var url = "/answers/" + answerId + "/votes"
    $.ajax({
      url: url,
      method: "post",
      data: {"type": "Answer", "vote": vote}
    }).done(function(response){
      $("div#" + answerId).find(".vote-down").css("color", "blue")
      $("div#" + answerId).find(".points").text(response["points"])
    }).fail(function(response){
      alert("You must be logged in to vote");
    });
  });
});
