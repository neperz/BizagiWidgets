var principalCoordinates = null;
var markers = {};

initializeVariables = function (dataJson, editable)
{
    
    markers = {};
    editableMap = editable;
    
    if (dataJson.coordinates === undefined || dataJson.coordinates === "") 
    {
        return;
    }
    else
    {
        var coordinates = (dataJson.coordinates);
        
        
        principalCoordinates = dataJson;
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

    if (typeof L === 'object') {
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
         
    
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibmVwZXJ6IiwiYSI6ImNqc3V1YnVkYzAwN3M0OW56aWcwNTY2Y2EifQ.8XCOcP2ql8vCzYQDqcy-LQ', {
        maxZoom: 18,
        attribution: 'Mapa Standard',
        id: 'mapbox.light'
        }).addTo(map);
        
        L.geoJSON(positionOnMap).addTo(map);
    }
}