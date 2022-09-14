$('input[id="r1"]').on('change', function(e){
    if(e.target.checked){
      $('#myModal').modal();
      $('document').ready(function() {
<<<<<<< HEAD
        const audio = new Audio("magic-mallet-6262.mp3" );
=======
        const audio = new Audio("~/audio/magic-mallet-6262.mp3" );
>>>>>>> 2d57ff359d138da64d778af5b779c02a35d4196f
        audio.play();
        });
    }
 });

 $('input[id="r2"]').on('change', function(e){
    if(e.target.checked){
      $('#myModal-2').modal();
      $('document').ready(function() {
<<<<<<< HEAD
        const audio = new Audio("negative_beeps-6008.mp3" );
=======
        const audio = new Audio("~/audio/negative_beeps-6008.mp3" );
>>>>>>> 2d57ff359d138da64d778af5b779c02a35d4196f
        audio.play();
        });
    }
 });

 
      function myFunction() {
        window.location.href="http://programminghead.com";
      }
    
      var popupsound = document.getElementById("notifypop");

function autoNotify() {
   popupsound.play(); //play the audio file
   popupsound.play(); //play the audio file
}
