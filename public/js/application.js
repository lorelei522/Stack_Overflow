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

  $(".answer-comment").on("click", ".comment-vote-up", function(event){
    var vote = 1;
    var answerId = $(this).closest("div").parent().attr("id")
    var commentId = $(this).closest("div").attr("id")
    var url = "/answers/" + answerId + "/comments/" + commentId + "/votes" 
    // debugger
    $.ajax({
      url: url,
      method: "post",
      data: {"type": "Comment", "vote": vote}
    }).done(function(response){
      $(".answer-comment").find("#" + answerId).find("#" + commentId).find(".comment-vote-up").css("color", "red")
      $(".answer-comment").find("#" + answerId).find("#" + commentId).find(".points").text(response["points"])
    }).fail(function(response){
      popupCenter("/popup", "login", "250", "250");
    });
  });

  $(".answer-comment").on("click", ".comment-vote-down", function(event){
    var vote = -1;
    var answerId = $(this).closest("div").parent().attr("id")
    var commentId = $(this).closest("div").attr("id")
    var url = "/answers/" + answerId + "/comments/" + commentId + "/votes" 
    // debugger
    $.ajax({
      url: url,
      method: "post",
      data: {"type": "Comment", "vote": vote}
    }).done(function(response){
      $(".answer-comment").find("#" + answerId).find("#" + commentId).find(".comment-vote-down").css("color", "blue")
      $(".answer-comment").find("#" + answerId).find("#" + commentId).find(".points").text(response["points"])
    }).fail(function(response){
      popupCenter("/popup", "login", "250", "250");
    });
  });

  $(".question-comment").on("click", ".question-vote-up", function(event){
    var vote = 1;
    var questionId = $(this).closest("div").parent().attr("id")
    var commentId = $(this).closest("div").attr("id")
    var url = "/questions/" + questionId + "/comments/" + commentId + "/votes" 
    $.ajax({
      url: url,
      method: "post",
      data: {"type": "Comment", "vote": vote}
    }).done(function(response){
      $(".question-comment").find("#" + questionId).find("#" + commentId).find(".question-vote-up").css("color", "red")
      $(".question-comment").find("#" + questionId).find("#" + commentId).find(".points").text(response["points"])
    }).fail(function(response){
      popupCenter("/popup", "login", "250", "250");
    });
  });

  $(".question-comment").on("click", ".question-vote-down", function(event){
    var vote = -1;
    var questionId = $(this).closest("div").parent().attr("id")
    var commentId = $(this).closest("div").attr("id")
    var url = "/questions/" + questionId + "/comments/" + commentId + "/votes" 
    // debugger
    $.ajax({
      url: url,
      method: "post",
      data: {"type": "Comment", "vote": vote}
    }).done(function(response){
      $(".question-comment").find("#" + questionId).find("#" + commentId).find(".question-vote-down").css("color", "blue")
      $(".question-comment").find("#" + questionId).find("#" + commentId).find(".points").text(response["points"])
    }).fail(function(response){
      popupCenter("/popup", "login", "250", "250");
    });
  });

});
