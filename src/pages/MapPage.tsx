import { Component } from "solid-js";
import MapGL, { Marker } from "solid-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const MapPage: Component = () => {
  const mapOptions = {
    container: "map",
    style: "https://api.maptiler.com/maps/streets/style.json?key=4Iyrc6TBGKphNJNy3iTH",
    center: [-74.5, 40],
    zoom: 9,
  };

  return (
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">Map</h1>
      <div class="w-full h-[600px]">
        <MapGL
          options={mapOptions}
        >
          <Marker
            lngLat={[-74.5, 40]}
          >
            <div class="text-red-500">📍</div>
          </Marker>
        </MapGL>
      </div>
    </div>
  );
};

export default MapPage; 