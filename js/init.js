(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    refreshUI()

  }); // end of document ready
})(jQuery); // end of jQuery name space

function refreshUI(){
    $.get('https://restratpws.azurewebsites.net/api/missions/100100098/from/PC_1576/way/r', function(data, status){
        document.getElementById('prochainbus').innerHTML = data[0];
        document.getElementById('deuxiemebus').innerHTML = data[1];
    });

    $.get('https://restratpws.azurewebsites.net/api/missions/100100098/from/PC_1552_1554/way/a', function(data, status){
        document.getElementById('prochainbusauteuil').innerHTML = data[0];
        document.getElementById('deuxiemebusauteuil').innerHTML = data[1];
    });

    // Tram T3b (Porte d'Asnieres direction Porte de Vincennes)
    $.get('https://restratpws.azurewebsites.net/api/missions/100112003/from/T3b_428/way/r', function(data, status){
        document.getElementById('prochaintram').innerHTML = data[0];
        document.getElementById('deuxiemetram').innerHTML = data[1];
    });

    // Tram T3b (Porte de Clignancourt direction Porte d'Asnières)
    $.get('https://restratpws.azurewebsites.net/api/missions/100112003/from/T3b_420_434/way/a', function(data, status){
        document.getElementById('tram_clignancourt_direction_asnieres').innerHTML = data[0];
        document.getElementById('tram_clignancourt_direction_asnieres_2').innerHTML = data[1];
    });

    // Tram T3b (Porte de Clignancourt direction Porte de Vincennes)
    $.get('https://restratpws.azurewebsites.net/api/missions/100112003/from/T3b_420_434/way/r', function(data, status){
        document.getElementById('tram_clignancourt_direction_vincennes').innerHTML = data[0];
        document.getElementById('tram_clignancourt_direction_vincennes_2').innerHTML = data[1];
    });

    $.get('https://restratpws.azurewebsites.net/api/missions/100100052/from/52_13_101/way/a', function(data, status){
        document.getElementById('prochainbus52').innerHTML = data[0];
        document.getElementById('deuxiemebus52').innerHTML = data[1];
    });

    // Metro Ligne 4
    $.get('https://restratpws.azurewebsites.net/api/missions/100110004/from/515/way/a', function(data, status){
        document.getElementById('metro_clignancourt_direction_montrouge').innerHTML = data[0];
        document.getElementById('metro_clignancourt_direction_montrouge_2').innerHTML = data[1];
    });

    // Metro Ligne 9 
    $.get('https://restratpws.azurewebsites.net/api/missions/100110009/from/427/way/a', function(data, status){
        document.getElementById('metro_michelange_direction_montreuil').innerHTML = data[0];
        document.getElementById('metro_michelange_direction_montreuil_2').innerHTML = data[1];
    });

    // Metro Ligne 10
    $.get('https://restratpws.azurewebsites.net/api/missions/100110010/from/428/way/a', function(data, status){
        document.getElementById('metro_michelange_direction_gareausterlitz').innerHTML = data[0];
        document.getElementById('metro_michelange_direction_gareausterlitz_2').innerHTML = data[1];
    });

};

function refreshPage() {
    location.reload();
}
