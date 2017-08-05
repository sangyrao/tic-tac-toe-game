$(document).ready(function(){
  var turn=1;
  
  $(".sq11,.sq12,.sq13,.sq21,.sq22,.sq23,.sq31,.sq32,.sq33").click(function(){
    if($(this).hasClass("x")||($(this).hasClass("o"))){
    alert("This square has already been taken, try another!");}
    else if(turn==1){
    $(this).addClass("x");
    turn=0;
    }
   else if(turn==0)
     { $(this).addClass("o");
    turn=1;
     }
    if($(".sq11").hasClass("x")&& $(".sq12").hasClass("x") && $(".sq13").hasClass("x") || $(".sq21").hasClass("x")&& $(".sq22").hasClass("x") && $(".sq23").hasClass("x")||$(".sq31").hasClass("x")&& $(".sq32").hasClass("x") && $(".sq33").hasClass("x")||$(".sq11").hasClass("x")&& $(".sq21").hasClass("x") && $(".sq31").hasClass("x")|| $(".sq12").hasClass("x")&& $(".sq22").hasClass("x") && $(".sq32").hasClass("x")||$(".sq13").hasClass("x")&& $(".sq23").hasClass("x") && $(".sq33").hasClass("x")||$(".sq11").hasClass("x")&& $(".sq22").hasClass("x") && $(".sq33").hasClass("x")||$(".sq13").hasClass("x")&& $(".sq22").hasClass("x") && $(".sq31").hasClass("x")) {
       alert("Player X has won the game..!!!");
       }
    
       if($(".sq11").hasClass("o")&& $(".sq12").hasClass("o") && $(".sq13").hasClass("o") || $(".sq21").hasClass("o")&& $(".sq22").hasClass("o") && $(".sq23").hasClass("o")||$(".sq31").hasClass("o")&& $(".sq32").hasClass("o") && $(".sq33").hasClass("o")||$(".sq11").hasClass("o")&& $(".sq21").hasClass("o") && $(".sq31").hasClass("o")|| $(".sq12").hasClass("o")&& $(".sq22").hasClass("o") && $(".sq32").hasClass("o")||$(".sq13").hasClass("o")&& $(".sq23").hasClass("o") && $(".sq33").hasClass("o")||$(".sq11").hasClass("o")&& $(".sq22").hasClass("o") && $(".sq33").hasClass("o")||$(".sq13").hasClass("o")&& $(".sq22").hasClass("o") && $(".sq31").hasClass("o")) {
       alert("Player O has won the game..!!!");
       }
   });
  $( "#inp" ).click(function() {
    location.reload(true);
});

});