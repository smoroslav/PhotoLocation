import { useEffect, useState } from "react";

export const useGeocodingNiceName = (geocoding) => {
  const [niceName, setNiceName] = useState("");

  useEffect(() => {
    if (geocoding) {
      if (geocoding.address.city) {
        setNiceName(`${geocoding.address.city}, ${geocoding.address.country}`);
      } else if (geocoding.address.village) {
        setNiceName(
          `${geocoding.address.village}, ${geocoding.address.country}`
        );
      } else if (geocoding.address.town) {
        setNiceName(`${geocoding.address.town}, ${geocoding.address.country}`);
      } else {
        setNiceName(`${geocoding.address.country}`);
      }
    } else {
      setNiceName(`-`);
    }
  }, [geocoding]);

  return niceName;
};
