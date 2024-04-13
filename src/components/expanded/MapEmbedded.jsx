import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useSelector } from "react-redux";
import { selectSelectedItem } from "../../redux/selectors";
import { FlyToMap } from "../map/FlyToMap";

const MapEmbedded = () => {
  const [mapCenter, setMapCenter] = useState([
    44.429756138888884, 22.48634147222222,
  ]);
  const selectedItem = useSelector(selectSelectedItem);

  useEffect(() => {
    if (selectedItem && selectedItem.location) {
      setMapCenter([selectedItem.location.lat, selectedItem.location.lon]);
    }
  }, [selectedItem]);

  return (
    <MapContainer
      center={[51.429756138888884, 5.486341472222223]}
      zoom={10}
      dragging={false}
      scrollWheelZoom={"center"}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {selectedItem && selectedItem.location && (
        <Marker
          className=""
          key={selectedItem.id}
          id={selectedItem.id}
          position={[selectedItem.location.lat, selectedItem.location.lon]}
          riseOnHover={true}
        >
          {/* <Popup>I am a pop-up!</Popup> */}
        </Marker>
      )}
      <FlyToMap location={mapCenter} animate={true} />
    </MapContainer>
  );
};

export default MapEmbedded;
