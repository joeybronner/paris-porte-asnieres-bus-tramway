(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    $.get('http://restratpws.azurewebsites.net/api/missions/100100098/from/PC_1576/way/r', function(data, status){
        document.getElementById('prochainbus').innerHTML = data[0];
        document.getElementById('deuxiemebus').innerHTML = data[1];
    });

    $.get('http://restratpws.azurewebsites.net/api/missions/100112003/from/T3b_428/way/r', function(data, status){
        document.getElementById('prochaintram').innerHTML = data[0];
        document.getElementById('deuxiemetram').innerHTML = data[1];
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space