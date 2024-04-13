import { useEffect } from "react";
import PropTypes from "prop-types";
import { useMap } from "react-leaflet";

export const FlyToMap = ({ location, animate }) => {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.flyTo(location, undefined, { animate });
    }
  }, [location, animate, map]);

  return null;
};

FlyToMap.defaultProps = {
  location: [0, 0],
  animate: true,
};

FlyToMap.propTypes = {
  location: PropTypes.arrayOf(PropTypes.number),
  animate: PropTypes.bool,
};
