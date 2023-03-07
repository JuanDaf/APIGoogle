let marker, map 
function initMap(){
    const posicion = {
        lat: -25,
        lng: 131.044
    }

    const posicion2 = {
        lat: 23,
        lng: 232.323
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
        title: "Posicion Inicial"
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