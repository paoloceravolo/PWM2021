

map = new OpenLayers.Map("DivMappa");
map.addLayer(new OpenLayers.Layer.OSM());

epsg4326 =  new OpenLayers.Projection("EPSG:4326"); //WGS 1984 projection
projectTo = map.getProjectionObject(); //The map projection (Spherical Mercator)

var lonLat = new OpenLayers.LonLat(9.68,45.36).transform(epsg4326, projectTo);
var zoom=10;
map.setCenter (lonLat, zoom);

var vectorLayer = new OpenLayers.Layer.Vector("Overlay");


// richiedo e ottengo i dati
let xml = new XMLHttpRequest()
xml.open("GET","https://www.dati.lombardia.it/resource/99k2-qg4v.json", true)
xml.send()

xml.onload = function (){
    let uni = JSON.parse(this.response)

    for(let i=0; i< uni.length; i++){
        console.log(uni[i].location.latitude,uni[i].location.longitude, uni[i].denominazione)

        let feature = new OpenLayers.Feature.Vector(
            new OpenLayers.Geometry.Point(uni[i].location.longitude, uni[i].location.latitude).transform(epsg4326, projectTo),
            {description: "" + uni[i].denominazione} ,
            {externalGraphic: 'marker.jpg', graphicHeight: 25, graphicWidth: 21, graphicXOffset:-12, graphicYOffset:-25  }
        );
        vectorLayer.addFeatures(feature);
    }
    map.addLayer(vectorLayer);


    //Add a selector control to the vectorLayer with popup functions
    var controls = {
        selector: new OpenLayers.Control.SelectFeature(vectorLayer, { onSelect: createPopup, onUnselect: destroyPopup })
    };

    function createPopup(feature) {
        feature.popup = new OpenLayers.Popup.FramedCloud("pop",
            feature.geometry.getBounds().getCenterLonLat(),
            null,
            '<div class="markerContent">'+feature.attributes.description+'</div>',
            null,
            true,
            function() { controls['selector'].unselectAll(); }
        );
        //feature.popup.closeOnMove = true;
        map.addPopup(feature.popup);
    }

    function destroyPopup(feature) {
        feature.popup.destroy();
        feature.popup = null;
    }

    map.addControl(controls['selector']);
    controls['selector'].activate();

}
