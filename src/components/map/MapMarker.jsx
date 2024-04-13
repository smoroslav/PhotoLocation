import PropTypes from "prop-types";
import { Marker } from "react-leaflet";
// import { Icon } from "leaflet";
// import { PinIcon } from "./PinIcon";
import {
  selectHoveredItemId,
  selectSelectedItemId,
} from "../../redux/selectors";
import useAppActions from "../../redux/useAppActions";
import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
import useMarkerIcon from "./useMarkerIcon";
import { PhotoItemStruct } from "../footer/PhotoItemStruct";

const MapMarker = ({ item }) => {
  const { setSelectedItemId } = useAppActions();
  const selectedItemId = useSelector(selectSelectedItemId);

  const hoveredItemId = useSelector(selectHoveredItemId);

  const markerIcon = useMarkerIcon(selectedItemId, hoveredItemId, item?.id);

  const markerClicked = (e) => {
    // console.log("selected: " + e.target.options.id);
    setSelectedItemId(e.target.options.id);
  };

  if (item && item.location) {
    const selected = item.id === selectedItemId;
    let zIndex = selected ? 1000 : 0;
    const hovered = item.id === hoveredItemId;
    zIndex = hovered ? 1100 : zIndex;

    return (
      <Marker
        className=""
        key={item.id}
        id={item.id}
        position={[item.location.lat, item.location.lon]}
        eventHandlers={{
          click: markerClicked,
        }}
        zIndexOffset={zIndex}
        icon={markerIcon}
        riseOnHover={true}
      >
        {/* <Popup>I am a pop-up!</Popup> */}
      </Marker>
    );
  }
  return null;
};

MapMarker.defaultProps = {
  item: undefined,
};

MapMarker.propTypes = {
  item: PropTypes.shape(PhotoItemStruct),
};

export default MapMarker;
