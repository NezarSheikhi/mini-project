
$(function() {
    $('#form').submit(function (event) {
        event.preventDefault();
        var color = $('#color').val();
        $('body').css('background-color', color);
    });
   
    var person = prompt("Please enter your name here!");
        alert ("Hello " + person + '!'+ "  How are you today?");
    
    $(document).ready(function(){
        $("#toggle").click(function(){
            $("p").toggle(1000);
        });
    });
    $(document).ready(function(){
        $("#reset").click(function(){
            $(".remove").remove();
        });
    });
});