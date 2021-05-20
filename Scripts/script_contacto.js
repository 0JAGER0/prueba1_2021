//COMIENZO DE FUNCION PARA GEOLOCALIZACION (EL MAPEO_STATIC SE IMPLEMENTARA PARA PODER IMPRIMIR LA UBICACION DENTRO DE UNA IMAGEN A TRAVES DE UN BUTTON)
function mapeo_static() {
  var output = document.getElementById('map');

  //CONDICIONES PARA PODER SABER EL SOPORTE DE LA GEOLOCALIZACION
  if (navigator.geolocation) {
    output.innerHTML = "<p>Tu navegador soporta la localizacion</p>";
  } else {
    output.innerHTML = "<p>Tu navegador no soporta localizacion</p>";
  }
  

  //SERVIRA PARA ALMACENAR LA LATITUD Y LA LONGITUD, PARA DESPUES ALMACENARLAS DENTRO DE la latitud y la longitud
  function localizacion_persona(posicion) {

    var latitud = posicion.coords.latitude;
    var longitud = posicion.coords.longitude;

    //servira para poder imprimir la ubicacion dentro de un mapa en imagen con google static map
    var imgURL = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitud + "," + longitud + "&size=600x300&markers=color:red%7C" + latitud + "," + longitud + "&key=AIzaSyBnhlD-Nb-YLYd0NpBwOzt2aeEukHvGXxE";
    output.innerHTML = "<img src='" + imgURL + "'>";

  }

  //SERVIRA PARA PODER MOSTRAR EN PANTALLA QUE LA LOCALIZACION NO SE PODRA GENERAR DEBIDO A QUE EL USUARIO LO ESTE DENEGANDO 
  function error_ubicacion() {
    output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";

  }

  //servira para almacenar las variables de "localizacion_persona" y "error_ubicacion", para asi despues mostrar la ubicacion 
  navigator.geolocation.getCurrentPosition(localizacion_persona, error_ubicacion);

}