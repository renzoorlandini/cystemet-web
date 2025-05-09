import React, { useEffect, useRef } from "react";

const SimpleMap = ({
  lat = -32.99548609419451,
  lng = -60.635625590324594,
  zoom = 13,
  height = "400px",
  width = "100%",
}) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Load Leaflet CSS only once
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    // Load Leaflet JS
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => {
      // Check if map already initialized
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      // Initialize map
      const L = window.L;
      const map = L.map(mapRef.current).setView([lat, lng], zoom);

      // Add the OpenStreetMap tiles
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add a marker
      L.marker([lat, lng]).addTo(map);

      // Save the map instance
      mapInstanceRef.current = map;
    };

    document.body.appendChild(script);

    return () => {
      // Clean up
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, [lat, lng, zoom]);

  return <div ref={mapRef} style={{ height, width }}></div>;
};

export default SimpleMap;
