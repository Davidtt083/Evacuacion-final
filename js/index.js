$('input[id="r1"]').on('change', function(e){
    if(e.target.checked){
      $('#myModal').modal();
    }
 });

 $('input[id="r2"]').on('change', function(e){
    if(e.target.checked){
      $('#myModal-2').modal();
    }
 });

 
      function myFunction() {
        window.location.href="http://programminghead.com";
      }
    