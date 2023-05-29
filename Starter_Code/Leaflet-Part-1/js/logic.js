// Add console.log
console.log("working");

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
        return "#03071E"
    }
    else if (depth > 30) {
        return "#370617"
    }
    else if (depth > 50) {
        return "#6A040F"
    }
    else if (depth > 70) {
        return "#9D0208"
    }
    else if (depth > 100) {
        return "#D00000"
    }
    else if (depth > 140) {
        return "#DC2F02"
    }
    else if (depth > 180) {
        return "#E85D04"
    }
    else if (depth > 220) {
        return "#f48C06"
    }
    else if (depth > 260) {
        return "#faa307"
    }
    else if (depth > 300) {
        return "#ffba08"
    }
    else if (depth > 350) {
        return "#ff7900"
    }
    else if (depth > 400) {
        return "#ff9100"
    }
    else if (depth > 450) {
        return "#ff9e00"
    }
    else if (depth > 500) {
        return "#ffb600"
    }
    else if (depth > 550) {
        return "#8900f2"
    }
    else if (depth > 600) {
        return "#db0086"
    }
    else if (depth > 650) {
        return "#e500A4"
    }
    else if (depth > 700) {
        return "#f20089"
    }
    else {
        return "#f3eff5"
    }
}

// Get the earthquake data in json format from last 30 days from earthquake.usgs.gov

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson").then(function(data){
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

// Pull the json data.  Set the marker shape as a circle.
        L.geoJson(data, {
            pointToLayer: function(feature,latlng){
                return L.circleMarker(latlng);
            },
            style: styleInfo,
            onEachFeature: function(feature,layer){
                layer.bindPopup(`
                    Magnitude: ${feature.properties.mag} <br>
                    Depth: ${feature.geometry.coordinates[2]} <br>
                    Location: ${feature.properties.place}
                `);
            }
        }).addTo(map);
    
}    
