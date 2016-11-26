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
      popupCenter("/popup", "login", "250", "250");
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
        popupCenter("/popup", "login", "250", "250");
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
        popupCenter("/popup", "login", "250", "250");
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
      popupCenter("/popup", "login", "250", "250");

    });
  });
});
