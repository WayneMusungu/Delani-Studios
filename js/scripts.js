// EFFECTS ON WHAT WE DO
$(document).ready(function(){
    $(".main").click(function(){
        $(this).children('.hide').slideToggle();
  $(this).children('.show').toggle();
    });
});