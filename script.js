let map;
navigator.geolocation.getCurrentPosition(
  function (position) {
    var latitude = parseFloat(position.coords.latitude);
    var longitude = parseFloat(position.coords.longitude);
    localStorage.setItem("latitude", latitude);
    localStorage.setItem("longitude", longitude);

    initMap(latitude, longitude);
  },
  function errorCallback(error) {
    console.log(error);
  }
);

function initMap(lat, lng) {
  var myLatLng = {
    lat,
    lng,
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(myLatLng),
    zoom: 15,
  });

const marker = new google.maps.Marker({
  position: new google.maps.LatLng(myLatLng),
  map: map,

  title:"LOCATION",

  animation: google.maps.Animation.BOUNCE,
});
const infowindow = new google.maps.InfoWindow({
  content: "You are in this position",
});
infowindow.open(map,marker);
}