"use client";

/// <reference types="@types/google.maps" />
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "AIzaSyC-4p5-0-9j6j-p-8-k-o-o-o-o-o-o-o-o",
        version: "weekly",
      });

      const { Map, Marker } = await loader.importLibrary("maps");
      const MarkerClass = Marker;

      const position = { lat: 37.7749, lng: -122.4194 }; // San Francisco coordinates

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 14,
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#242f3e" }],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#242f3e" }],
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#746855" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
          },
        ],
      };

      const map = new Map(mapRef.current as HTMLElement, mapOptions);

      new MarkerClass({
        position: position,
        map: map,
        title: "Dr. Sarah Mitchell Dental Office",
      });
    };

    initMap();
  }, []);

  return <div ref={mapRef} className="w-full h-[300px] rounded-lg shadow-lg" />;
}
