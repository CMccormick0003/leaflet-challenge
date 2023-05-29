// Add console.log
console.log("it_works");

// Make the basemap with OpenStreetMap
let basemap = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution:'Map via openstreetmap.org &copy;'
    }
);

let map = L.map("map", {
    center: [30, -55],
    zoom: 2.75
})

basemap.addTo(map);

// Create a marker based on the magnitude - larger radius for higher magnitude
function getRadius(magnitude) {
    if(magnitude === 0) {
        return 1
    }
    return magnitude * 4
}

// Show depth of the earthquake by color
function getColor(depth) {
    if(depth > -1) {
        return "#000000"
    }
    else if (depth > 5) {
        return "#fffdc8"
    }
    else if (depth > 10) {
        return "#ffcb64"
    }
    else if (depth > 20) {
        return "#9997fc"
    }
    else if (depth > 30) {
        return "#6665fd"
    }
    else if (depth > 40) {
        return "#9965fd"
    }
    else if (depth > 50) {
        return "#bb32fe"
    }
    else if (depth > 60) {
        return "#ff32fe"
    }
    else if (depth > 70) {
        return "#ff00ff"
    }
    else if (depth > 80) {
        return "#ff00aa"
    }
    else if (depth > 90) {
        return "#ff0055"
    }
    else if (depth > 100) {
        return "#cc0044"
    }
    else if (depth > 150) {
        return "#990033"
    }
    else if (depth > 300) {
        return "#000000"
    }
    else {
        return "#ffffff"
   }
}

// Get the earthquake data in json format from last day from earthquake.usgs.gov

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson").then(function(data){
    function styleInfo(feature){
        return {
            opacity: 1,
            fillOpacity: 1,
            fillColor: getColor(feature.geometry.coordinates[2]),
            color: "#000000",
            radius: getRadius(feature.properties.mag),
            stroke: true,
            weight: 0.5
        }
    }


// Pull the json data.  Set the marker shape as a circle and customize based on earthquake features.
        L.geoJson(data, {
            pointToLayer: function(feature,latlng){
                return L.circleMarker(latlng);
            },
            style: styleInfo,
            onEachFeature: function(feature,layer){
                layer.bindPopup(`
                    Depth: ${feature.geometry.coordinates[2]} <br>
                    Magnitude: ${feature.properties.mag} <br>
                    Location: ${feature.properties.place}`);
            }
        }).addTo(map);
    

 // Add map legend
 let legend = L.control({
    position:"bottomleft"
});

legend.onAdd = function(){
    let container = L.DomUtil.create("div", "info legend");
    let grades = [0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 300];
    let colors = ["#000000", "#fffdc8", "#ffcb64", "#9997fc", "#6665fd", "#9965fd", "#bb32fe", "#ff32fe", "#ff00ff", "#ff00aa", "#ff0055", "#cc0044", "#990033", "#000000"];
    // for(let index = 0; index < grades.length; index++) {
    //    container.innerHTML += `<i style="background: ${colors[index]}"></i>${grades[index]}+ <br>`
    //}

    for (let i = 0; i < grades.length; i++) {
        div.innerHTML += "<i style='background: " + colors[i] + "'></i> "
          + grades[i] + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
    }

    return div;
}
    legend.addTo(map);
})    
