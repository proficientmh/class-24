
    //Post event

    $("#post-icon").click(function(){
      $("#post").toggle();
    });



    //Notification event

    $("#noti_bell").click(function(){
        $("#notification").toggle();
       
    });
  
    //Login
    $("#login").click(function(){
        $("#login_sub").toggle();
      });

    window.addEventListener('mouseup',function(event){
      var pol = document.getElementById('notification');
      if(event.target != pol && event.target.parentNode != pol){
          pol.style.display = 'none';
         }
    });  




//Sub notification event

  document.getElementById("Notification_icon").addEventListener('click',myFunction)

  function myFunction() {
      var x = document.getElementById("notific_sub");
      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
  }


  document.getElementById('noti_bell').addEventListener('click',function(){
      document.getElementById('notificatiion').style.display='none';
  })



