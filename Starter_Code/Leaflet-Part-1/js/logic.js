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
