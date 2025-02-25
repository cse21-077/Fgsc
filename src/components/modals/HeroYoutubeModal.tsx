"use client";
import React from "react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});

export function HeroGlobeModal() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const sampleArcs = [
    { order: 1, startLat: -19.88, startLng: -43.95, endLat: -22.90, endLng: -43.17, arcAlt: 0.1, color: "#06b6d4" },
    { order: 2, startLat: 28.61, startLng: 77.20, endLat: 3.13, endLng: 101.68, arcAlt: 0.2, color: "#3b82f6" },
    { order: 3, startLat: 51.50, startLng: -0.12, endLat: 34.05, endLng: -118.24, arcAlt: 0.3, color: "#6366f1" },
    { order: 4, startLat: 22.31, startLng: 114.16, endLat: 1.35, endLng: 103.81, arcAlt: 0.2, color: "#06b6d4" },
    { order: 5, startLat: 35.67, startLng: 139.65, endLat: 40.71, endLng: -74.00, arcAlt: 0.4, color: "#3b82f6" },
    { order: 6, startLat: -33.86, startLng: 151.20, endLat: 52.52, endLng: 13.40, arcAlt: 0.5, color: "#6366f1" }
  ];

  return (
    <div className="relative w-full min-h-[300px] md:min-h-[500px] flex items-center justify-center">
      <World data={sampleArcs} globeConfig={globeConfig} />
    </div>
  );
}
