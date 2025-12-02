import type { FC } from "react";
import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

const Home: FC = () => {
  const apiKey = import.meta.env.VITE_MAP_API_KEY;

  return (
    <Map
      initialViewState={{
        longitude: 13,
        latitude: 51,
        zoom: 4,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`}
    />
  );
};
export default Home;
