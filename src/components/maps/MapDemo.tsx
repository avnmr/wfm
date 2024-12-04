import { Component } from "solid-js";
import Map from "solid-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const MapDemo: Component = () => {
  return (
    <div class="h-[500px] w-full">
      <Map
        options={{
          style: "https://api.maptiler.com/maps/streets/style.json?key=4Iyrc6TBGKphNJNy3iTH",
          center: [-74.5, 40],
          zoom: 9
        }}
      />
    </div>
  );
};

export default MapDemo; 