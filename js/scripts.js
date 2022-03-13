// EFFECTS ON WHAT WE DO
$(document).ready(function(){
    $(".col-md-4 ").click(function(){
        $(this).children(".hide").slideToggle(2500)
    });
});
//portifolio section 
var projHovers = ['work1', 'work2', 'work3', 'work4', 'work5', 'work6', 'work7', 'work8']
$(document).ready(function(){
    projHovers.forEach(function(projHover){
        $('#'+projHover).hover(
          function(){$('#'+projHover+' p').fadeIn()},
          function(){$('#'+projHover+' p').fadeOut()})
      });
});
