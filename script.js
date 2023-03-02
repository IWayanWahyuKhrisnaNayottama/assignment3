$(document).ready(function(){
    $(".dropdown").hover(function(){
      $(this).find(".dropdown-content").slideToggle("fast");
    });
  });
  