// Add console.log
console.log("it_works");

// Make the basemap with OpenStreetMap
let basemap = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution:'Map via openstreetmap.org &copy;'
    }
);

let map = L.map("map", {
    center: [40.7, -94.5],
    zoom: 3
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
    if(depth > 0) {
        return "#f9f8d8"
    }
    else if (depth > 30) {
        return "#bbe619"
    }
    else if (depth > 50) {
        return "#dfe619"
    }
    else if (depth > 70) {
        return "#d6db4d"
    }
    else if (depth > 100) {
        return "#e3d735"
    }
    else if (depth > 140) {
        return "#f3be16"
    }
    else if (depth > 180) {
        return "#f3aa16"
    }
    else if (depth > 220) {
        return "#f39116"
    }
    else if (depth > 260) {
        return "#f37a16"
    }
    else if (depth > 300) {
        return "#f35416"
    }
    else if (depth > 400) {
        return "#f33716"
    }
    else if (depth > 500) {
        return "#f32016"
    }
    else if (depth > 600) {
        return "#c93b48"
    }
    else if (depth > 700) {
        return "#562e3a"
    }
    else {
        return "#e4dcdf"
    }
}

// Get the earthquake data in json format from last 7 days from earthquake.usgs.gov

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data){
    function styleInfo(feature){
        return {
            opacity: 1,
            fillOpacity: 1,
            fillColor: getColor(feature.geometry.coordinates[2]),
            color: "#FFFFFF",
            radius: getRadius(feature.properties.mag),
            stroke: true,
            weight: 0.4
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
    position:"topright"
});

legend.onAdd = function(){
    let container = L.DomUtil.create("div", "info legend");
    let grades = [0, 30, 50, 70, 100, 140, 180, 220, 260, 300, 350, 400, 450, 500, 550, 600, 650, 700];
    let colors = ['#f9f8d8', '#bbe619', '#dfe619', '#d6db4d', '#e3d735', '#f3be16', '#f3aa16', '#f39116', '#f37a16', '#f35416', '#f33716', '#f32016', '#c93b48', '#562e3a', '#e4dcdf'];
    for(let index = 0; index < grades.length; index++) {
        container.innerHTML += `<i style="background: ${colors[index]}"></i>${grades[index]}+ <br>`
    }
    return container;
}
    legend.addTo(map);
})    
