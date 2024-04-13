import { Icon } from "leaflet";
import { PinIcon } from "./PinIcon";
import { useMemo } from "react";

export const useMarkerIcon = (selectedId, hoveredId, id) => {
  const createIcon = () => {
    var icn;
    if (id === selectedId) {
      icn = new Icon({
        iconUrl: PinIcon({ colorStroke: "#158496", colorFill: "#0bbcd9" }), // require the path to the asset
        iconSize: [34, 47], // size of the icon
        iconAnchor: [17, 47], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -47], // point from which the popup should open relative to the iconAnchor
      });
    } else if (id === hoveredId) {
      icn = new Icon({
        iconUrl: PinIcon({ colorStroke: "#A60D0D", colorFill: "#EA4335" }), // require the path to the asset
        iconSize: [34, 47], // size of the icon
        iconAnchor: [17, 47], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -47], // point from which the popup should open relative to the iconAnchor
      });
    } else {
      icn = new Icon({
        iconUrl: PinIcon({ colorStroke: "#A60D0D", colorFill: "#EA4335" }), // require the path to the asset
        iconSize: [28, 41], // size of the icon
        iconAnchor: [14, 41], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -41], // point from which the popup should open relative to the iconAnchor
      });
    }
    return icn;
  };
  const markerIcon = useMemo(createIcon, [selectedId, hoveredId, id]);

  return markerIcon;
};

export default useMarkerIcon;
