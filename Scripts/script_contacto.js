//COMIENZO DE FUNCION PARA GEOLOCALIZACION (EL MAPEO_STATIC SE IMPLEMENTARA PARA PODER IMPRIMIR LA UBICACION DENTRO DE UNA IMAGEN A TRAVES DE UN BUTTON)
function mapeo_static() {
  var output = document.getElementById('map');

  //CONDICIONES PARA PODER SABER EL SOPORTE DE LA GEOLOCALIZACION
  if (navigator.geolocation) {
    output.innerHTML = "<p>Tu navegador soporta Geolocalizacion</p>";
  } else {
    output.innerHTML = "<p>Tu navegador no soporta Geolocalizacion</p>";
  }
  

  function localizacion_persona(posicion) {

    var latitude = posicion.coords.latitude;
    var longitude = posicion.coords.longitude;

    //servira para poder imprimir la ubicacion dentro de un mapa con google static map
    var imgURL = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&size=600x300&markers=color:red%7C" + latitude + "," + longitude + "&key=AIzaSyBnhlD-Nb-YLYd0NpBwOzt2aeEukHvGXxE";
    output.innerHTML = "<img src='" + imgURL + "'>";

  }

  function error_ubicacion() {
    output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";

  }

  //servira para almacenar las variables de "localizacion_persona" y "error_ubicacion", para asi despues mostrar la ubicacion 
  navigator.geolocation.getCurrentPosition(localizacion_persona, error_ubicacion);

}