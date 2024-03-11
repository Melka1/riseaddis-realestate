import L from "leaflet";
import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  useMapEvents,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect, useState } from "react";
import { useStore } from "@/Context/store";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

// function LocationMarker() {
//   const [position, setPosition] = useState(null);
//   const map = useMapEvents({
//     click(e) {
//       setPosition(e.latlng);
//     },
//   });

//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup>
//         {"Lat: " + position.lat}
//         <br />
//         {"Lng: " + position.lng}
//       </Popup>
//     </Marker>
//   );
// }

const Map = ({ type }) => {
  // const [loc, setLoc] = useState([9.98276372548611, 38.73423775438933]);
  const [prop, setProp] = useState({});
  const [list, setList] = useState([]);
  console.log("Type", type);
  const { property, searchList } = useStore();
  useEffect(() => {
    setList(searchList);
    setProp(property);
  }, [property, searchList]);
  return (
    <MapContainer
      center={[9.026705701082706, 38.83306503295899]}
      zoom={8}
      scrollWheelZoom={false}
      style={{ height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {list &&
        type == "main" &&
        list.map((prop) => (
          <Marker key={prop.id} position={[prop.gps?.Lat, prop.gps?.Lng]}>
            <Popup>
              {"Lat: " + prop.gps?.Lat}
              <br />
              {"Lng: " + prop.gps?.Lng}
            </Popup>
          </Marker>
        ))}
      {prop?.name && type == "property" && (
        <Marker key={prop.id} position={[prop.gps?.Lat, prop.gps?.Lng]}>
          <Popup>
            {"Lat: " + prop.gps?.Lat}
            <br />
            {"Lng: " + prop.gps?.Lng}
          </Popup>
        </Marker>
      )}
      {/* <LocationMarker /> */}
    </MapContainer>
  );
};

export default Map;
