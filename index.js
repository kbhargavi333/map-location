import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getDatabase, getdatabase, ref, set } from "firebase/database";

navigator.geolocation.getCurrentPosition(
    function (position) {
      var latitude = parseFloat(position.coords.latitude);
      var longitude = parseFloat(position.coords.longitude);
      localStorage.setItem("latitude", latitude);
      localStorage.setItem("longitude", longitude);
  
      initMap(latitude, longitude);
      function save(){
      save(latitude, longitude);
    alert("location saved")}
      
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




  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCay4Q9ISUuQdB9EFsbcGLHcG6Z2B4nrWU",
    authDomain: "location-4533d.firebaseapp.com",
    databaseURL: "https://location-4533d-default-rtdb.firebaseio.com",
    projectId: "location-4533d",
    storageBucket: "location-4533d.appspot.com",
    messagingSenderId: "125858161017",
    appId: "1:125858161017:web:f1927bc54e45c91b31cfa8",
    measurementId: "G-1SJY75CDD5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase();
  function save(lat,lng){
    const db = getDatabase();
  set(ref(db, 'users/' ), {
    lat:lat,
    ln:lng
  });
}
  

