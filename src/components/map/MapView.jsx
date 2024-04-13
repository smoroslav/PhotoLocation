import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import PropTypes from "prop-types";
import { PhotoItemStruct } from "../footer/PhotoItemStruct";
import { FlyToMap } from "./FlyToMap.jsx";
import { useSelector } from "react-redux";
import { selectSelectedItem } from "../../redux/selectors";
import MapMarker from "./MapMarker.jsx";

const MapView = ({ items }) => {
  const [mapCenter, setMapCenter] = useState([
    51.429756138888884, 5.486341472222223,
  ]);
  const selectedItem = useSelector(selectSelectedItem);

  useEffect(() => {
    if (selectedItem && selectedItem.location) {
      setMapCenter([selectedItem.location.lat, selectedItem.location.lon]);
    }
  }, [selectedItem]);

  //console.log(icon);
  const markers = items.map((item) => {
    if (item.location) {
      return (
        <MapMarker key={item.id} item={item}>
          <Popup>I am a pop-up!</Popup>
        </MapMarker>
      );
    }
  });

  return (
    <div>
      <MapContainer center={[51.429756138888884, 5.486341472222223]} zoom={14}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FlyToMap location={mapCenter} />
        {markers}
      </MapContainer>
    </div>
  );
};

MapView.defaultProps = {
  items: [],
};

MapView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(PhotoItemStruct)),
};

export default MapView;
