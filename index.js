let marker, map 
function initMap(){
    const posicion = {
        lat: -25,
        lng: 131.044
    }

    const posicion2 = {
        lat: 46,
        lng: -74.053
    }
    const posicion3 = {
        lat: 61,
        lng: -149.930
    }
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom:4,
        center: posicion
    })

    const marker =  new google.maps.Marker({
        position:posicion,
        map: map,
        title: "Posicion Inicial"
    })
     const marker2 =  new google.maps.Marker({
        position:posicion2,
        map: map,
        title: "Posicion Secundaria"
    })

    const marker3 =  new google.maps.Marker({
        position:posicion3,
        map: map,
        title: "Posicion Final"
    })

   // geoposicion()
}

function geoposicion(){
    if(navigator.geolocation){
    const geoloc = navigator.geolocation
    const watchPos =  geoloc.watchPosition(centraMapa, error => console.error(error), {timeout: 6000})
    }else{
        alert("El navegador no permite la geolocalización")
    }
}

function centraMapa(position){
    const nuevapos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(nuevapos)
    marker.setPosition(nuevapos)
    map.setCenter(nuevapos)
}