// EFFECTS ON WHAT WE DO
$(document).ready(function(){
    $(".col-md-4 ").click(function(){
        // create a variable speed for our slideToggle 
        var speed= 3000
        $(this).children(".hide").slideToggle(speed)
    });
});
//portifolio section 
var projHovers = ['work1', 'work2', 'work3', 'work4', 'work5', 'work6', 'work7', 'work8']
$(document).ready(function(){
    projHovers.forEach(function(projHover){
        // Create a variable speed for fade
        var speed=3000
        $('#'+projHover).hover(
          function(){$('#'+projHover+' p').fadeIn(speed)},
          function(){$('#'+projHover+' p').fadeOut(speed)})
      });
});
// Collecting user's input on the contact us form
$(document).ready(function(){
    $('button').click(function (cn) {
        var client = document.getElementById('nameDetail').nodeValue;
        alert("Dear" + " client" + " thank you for visiting our website. We have successfully received your message and we will get back to you. Incase of any other issue kindly feel free to contact us again.")
        cn.preventDefault();
    });

});
