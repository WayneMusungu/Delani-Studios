// EFFECTS ON WHAT WE DO
$(document).ready(function(){
    $(".col-md-4 ").click(function(){
        $(this).children(".hide").slideToggle(2500)
    });
});
//portifolio section 
var projHovers = ['project1', 'project2', 'project3', 'project4', 'project5', 'project6', 'project7', 'project8']
$(document).ready(function(){
    projHovers.forEach(function(projHover){
        $('#'+projHover).hover(
          function(){$('#'+projHover+' p').fadeIn()},
          function(){$('#'+projHover+' p').fadeOut()})
      });
});
