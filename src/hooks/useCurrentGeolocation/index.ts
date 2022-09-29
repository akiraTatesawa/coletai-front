import { useState, useEffect } from "react";

import { Coords } from "../../@types/MapTypes";

export function useCurrentGeolocation() {
  const [currentLocation, setCurrentLocation] = useState<Coords | undefined>(
    undefined
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) =>
      setCurrentLocation([coords.latitude, coords.longitude])
    );
  }, []);

  return { currentLocation };
}
