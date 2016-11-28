$(document).ready(function() {

  $(".question").on("click", ".vote-up", function(event){
    function popupCenter(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  }
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
      if (response["status"] === 422) {
        alert("Logged in users may only vote once per question!")
      } else {
        popupCenter("/popup", "login", "250", "250");
      };
    });
  });

  $(".question").on("click", ".vote-down", function(event){
    function popupCenter(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  }
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
      if (response["status"] === 422) {
        alert("Logged in users may only vote once per question!")
      } else {
        popupCenter("/popup", "login", "250", "250");
      };
    });
  });

  $(".answer").on("click", ".vote-up", function(event){
    function popupCenter(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  }
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
      if (response["status"] === 422) {
        alert("Logged in users may only vote once per answer!")
      } else {
        popupCenter("/popup", "login", "250", "250");
      };
    });
  });

  $(".answer").on("click", ".vote-down", function(event){
    function popupCenter(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  }
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
      if (response["status"] === 422) {
        alert("Logged in users may only vote once per answer!")
      } else {
        popupCenter("/popup", "login", "250", "250");
      };
    });
  });

  $(".answer-comment").on("click", ".comment-vote-up", function(event){
    function popupCenter(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  }
    var vote = 1;
    var answerId = $(this).closest("div").parent().attr("id")
    var commentId = $(this).closest("div").attr("id")
    var url = "/answers/" + answerId + "/comments/" + commentId + "/votes" 
    $.ajax({
      url: url,
      method: "post",
      data: {"type": "Comment", "vote": vote}
    }).done(function(response){
      $(".answer-comment").find("#" + answerId).find("#" + commentId).find(".comment-vote-up").css("color", "red")
      $(".answer-comment").find("#" + answerId).find("#" + commentId).find(".points").text(response["points"])
    }).fail(function(response){
      if (response["status"] === 422) {
        alert("Logged in users may only vote once per comment!")
      } else {
        popupCenter("/popup", "login", "250", "250");
      };
    });
  });

  $(".answer-comment").on("click", ".comment-vote-down", function(event){
    function popupCenter(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  }
    var vote = -1;
    var answerId = $(this).closest("div").parent().attr("id")
    var commentId = $(this).closest("div").attr("id")
    var url = "/answers/" + answerId + "/comments/" + commentId + "/votes" 
    $.ajax({
      url: url,
      method: "post",
      data: {"type": "Comment", "vote": vote}
    }).done(function(response){
      $(".answer-comment").find("#" + answerId).find("#" + commentId).find(".comment-vote-down").css("color", "blue")
      $(".answer-comment").find("#" + answerId).find("#" + commentId).find(".points").text(response["points"])
    }).fail(function(response){
      if (response["status"] === 422) {
        alert("Logged in users may only vote once per comment!")
      } else {
        popupCenter("/popup", "login", "250", "250");
      };
    });
  });

  $(".question-comment").on("click", ".question-vote-up", function(event){
    function popupCenter(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  }
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
      if (response["status"] === 422) {
        alert("Logged in users may only vote once per comment!")
      } else {
        popupCenter("/popup", "login", "250", "250");
      };
    });
  });

  $(".question-comment").on("click", ".question-vote-down", function(event){
    function popupCenter(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  }
    var vote = -1;
    var questionId = $(this).closest("div").parent().attr("id")
    var commentId = $(this).closest("div").attr("id")
    var url = "/questions/" + questionId + "/comments/" + commentId + "/votes" 
    $.ajax({
      url: url,
      method: "post",
      data: {"type": "Comment", "vote": vote}
    }).done(function(response){
      $(".question-comment").find("#" + questionId).find("#" + commentId).find(".question-vote-down").css("color", "blue")
      $(".question-comment").find("#" + questionId).find("#" + commentId).find(".points").text(response["points"])
    }).fail(function(response){
      if (response["status"] === 422) {
        alert("Logged in users may only vote once per comment!")
      } else {
        popupCenter("/popup", "login", "250", "250");
      };
    });
  });

  $("nav").on("click", "#nav-question", function(event){
    event.preventDefault();
    var url = "/questions/new"
    $.ajax({
      url: url,
      method: "get"
    }).done(function(response){
      $("nav").find("#nav-question").replaceWith(response)
    });
  });

  $(".new-answer").on("click", function(event){
    event.preventDefault();
    var questionId = $(this).attr("id")
    var url = "/questions/" + questionId + "/answers/new"
    $.ajax({
      url: url,
      method: "get"
    }).done(function(response){
      $(".new-answer").replaceWith(response)
    });
  });

  $(".container").on("submit", ".new-answer-form", function(event) { 
  event.preventDefault();
    var questionId = $(this).attr("id")
    var url = "/questions/" + questionId + "/answers"
    var data = $(this).serialize()
    $.ajax({
      url: url,
      method: "post",
      data: data 
    }).done(function(response){
      // alert(response)
      $(".answer-list").append(response)
      $(".new-answer").hide();
    });
  });
});
