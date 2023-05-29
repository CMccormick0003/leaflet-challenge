# Earthquakes Displayed by Depth and Magnitude - Global - 29May2023
![image](https://github.com/CMccormick0003/leaflet-challenge/assets/120672518/1dff0b95-d263-4e07-bc0c-e9709b213d47)
Source: https://earthquake.usgs.gov/, GeoJASON SUmmary Format, All Earthquakes Past Day (accessed 29May2023, 12:00 pm EST)

## Background
The United States Geological Survey (USGS for short) is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.  Data on the website refresh every minute and can be pulled for time periods of Past Hour, Past Day, Past 7 Days and Past 30 Days. Once the user chooses a time period, you can select the data feed desired, including Significant Earthquakes, Magnitude 4.5+ Earthquakes, Magnitude 2.5+ Earthquakes, Magnitude 1.0+ Earthquakes or All Earthquakes from the time period.

## Scope of project:
## Developing a way to visualize USGS data to inform viewers about daily earthquakes affecting the planet

## Tools used
HTML, JavaScript, Leaflet

## Steps:
1. Go to the USGS website JSON feed (Data source: http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)
![image](https://github.com/CMccormick0003/leaflet-challenge/assets/120672518/1d054195-5f07-4853-b015-f5e32062b229)

2. Choose a dataset to visualize.  For this exercise, I chose the the link for All Earthquakes in the past day (https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson).  The screenshot below is some of the JSON data seen when you access the link: 
![image](https://github.com/CMccormick0003/leaflet-challenge/assets/120672518/a5ceac2d-4450-48ab-8c2b-3f73b6f485be)

3. Use the URL of this JSON to pull in the data for the visualization.  This will get data for all earthquakes of any magnitude and depth for the PAST DAY in any part of the world.  
4. Uese Leaflet to import and visualize the data
5. Create a map that plots all the earthquakes from the dataset based on their longitude and latitude.
6.  Create markers that reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes appear as larger circles.  Earthquakes with greater depth appear darker in color.
7. Add popups that provide additional information about the earthquake when its associated marker is clicked.
8. Create a legend and style it in the css file.

## Interact with the map to see more details of the output.
## Zoom in on the map to see additional detail in particular regions.  
## Click on a marker to see more details about the earthquake reported.
Examples are below.

### Alaska, USA
![image](https://github.com/CMccormick0003/leaflet-challenge/assets/120672518/209e389e-4be0-469c-8724-7a9b6e4bb228)

### Western USA (Californina, Idaho, Nevada)
![image](https://github.com/CMccormick0003/leaflet-challenge/assets/120672518/47881c0e-7a20-40cd-8c72-5f834252a7c7)

### Hawaii, USA
![image](https://github.com/CMccormick0003/leaflet-challenge/assets/120672518/8b8f1e32-b679-4869-96d8-d729b9a57464)

### South America
![image](https://github.com/CMccormick0003/leaflet-challenge/assets/120672518/2f330adf-0004-4af1-8206-c73da7d6fd51)

### Caribbean Region (Puerto Rico, Dominican Republic)
![image](https://github.com/CMccormick0003/leaflet-challenge/assets/120672518/1fefc166-96a9-479a-8d94-103ec6afab67)

### Arabian Sea
![image](https://github.com/CMccormick0003/leaflet-challenge/assets/120672518/72f5ca42-4089-4276-a1e2-5e23b838c639)

### Asia 
![image](https://github.com/CMccormick0003/leaflet-challenge/assets/120672518/b17fe088-a5d5-4677-830e-29f99ed81a3a)


