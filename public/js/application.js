$(document).ready(function() {
  // voting up
  $(".question").on("click", ".vote-up", function(event){

    var vote = 1;
    var questionId = $(this).closest("div").attr("id")
    var url = "/questions/" + questionId + "/votes"
    $.ajax({
      url: url,
      method: "post",
      data: {"type": "Question", "vote": vote}
    }).done(function(response){
      // alert(response["points"])
      $("div#" + questionId).find(".vote-up").css("color", "red")
      $("div#" + questionId).find(".points").text(response["points"])
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
      $("div#" + questionId).find(".vote-down").css("color", "red")
      $("div#" + questionId).find(".points").text(response["points"])
    });
  });

    $(".question").on("click", ".not_logged_vote_up", function(event){
      alert("Only logged in users can vote!");
    })

    $(".question").on("click", ".not_logged_vote_down", function(event){
      alert("Only logged in users can vote!");
    })
});
