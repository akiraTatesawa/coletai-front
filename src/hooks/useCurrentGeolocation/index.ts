import { useState, useEffect } from "react";

type Coords = [number, number];

export function useCurrentGeolocation() {
  const [currentLocation, setCurrentLocation] = useState<Coords>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) =>
      setCurrentLocation([coords.latitude, coords.longitude])
    );
  }, []);

  return { currentLocation };
}
