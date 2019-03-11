var principalCoordinates = null;
var mkey =null;
var markers = {};

 
initializeVariables = function (dataJson, editable, mtoken)
{
    mkey=mtoken;
    markers = {};
    editableMap = editable;
    
    if (dataJson.geometry.coordinates === undefined || dataJson.geometry.coordinates === "") 
    {
        //console.log('coords by default');
        return;
    }
    else
    {
        var coordinates = (dataJson.geometry.coordinates);
        
        
        principalCoordinates = dataJson;
        //console.log('coords by property');
    }
    
},
addNewMarker = function(map,geocoder,position) {
    if (map) {
        L.geoJSON(dataJson).addTo(map);
    }
},
getFinalData = function() {


	var objJson =principalCoordinates;

    return JSON.stringify(objJson);
},
initMap = function() {
    var id;
 var map = undefined;
   
 var map = L.map('pinOnMap').setView([39.74739, -105], 13);
    
        var currentPosition = undefined;
         
        var BaseballStadium = {
            "type": "Feature",
            "properties": {
                "name": "Coors Field",
                "amenity": "Baseball Stadium",
                "popupContent": "This is where the Rockies play!"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-104.99404, 39.75621]
            }
        };

        var positionOnMap = principalCoordinates || (currentPosition || BaseballStadium);
         
    
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' +mkey, {
        attribution: 'L map',
        id:'mapbox.streets',
        accessToken:mkey
        }).addTo(map);
        
        var latx =positionOnMap.geometry.coordinates[0];
        var logx = positionOnMap.geometry.coordinates[1];
        var mTitle = positionOnMap.properties.amenity;
        var mPopCont= positionOnMap.properties.popupContent;
        var ll = L.latLng(latx, logx);
        
        map.setView(ll);
        
        //var newMarker = new L.marker(ll).addTo(map);
        var marker = L.marker(ll, {
        elevation: 260.0,
        title: mTitle
      }).addTo(map);
      marker.bindPopup(mPopCont).openPopup();
      
    
}