// EFFECTS ON WHAT WE DO
$(document).ready(function(){
    $(".col-md-4 ").click(function(){
        $(this).children(".hide").slideToggle(2500)
    });
});