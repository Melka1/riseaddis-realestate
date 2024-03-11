import L from "leaflet";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect, useState } from "react";
import { useStore } from "@/Context/store";
import { Bathtub, Bed, ZoomOutMapSharp } from "@mui/icons-material";
import { Box, Divider, Grid, Typography } from "@mui/material";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

const Map = ({ type }) => {
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
              <Grid container flexDirection={"column"} spacing={0.5}>
                <Grid item md={12} width={1}>
                  <Box component={"img"} src={prop.images[0]} width={1}></Box>
                </Grid>
                <Grid item sm={12}>
                  <Box display={"flex"} gap={"1rem"}>
                    <Box display={"flex"}>
                      <Box display={"flex"}>
                        <Bed fontSize="8px" />
                        <Typography fontSize={"10px"} m={"0 !important"}>
                          {prop.bedroom}
                        </Typography>
                      </Box>
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ p: "0 0.25rem" }}
                      />
                      <Box display={"flex"} gap={"0.25rem"}>
                        <Bathtub fontSize="8px" />
                        <Typography fontSize={"10px"} m={"0 !important"}>
                          {prop.bathroom}
                        </Typography>
                      </Box>
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ p: "0 0.25rem" }}
                      />
                      <Box display={"flex"} gap={"0.25rem"}>
                        <ZoomOutMapSharp fontSize="8px" />
                        <Typography fontSize={"10px"} m={"0 !important"}>
                          {prop.area}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Popup>
          </Marker>
        ))}
      {prop?.name && type == "property" && (
        <Marker key={prop.id} position={[prop.gps?.Lat, prop.gps?.Lng]}>
          <Popup>
            <Grid container flexDirection={"column"} spacing={0.5}>
              <Grid item md={12} width={1}>
                <Box component={"img"} src={prop.images[0]} width={1}></Box>
              </Grid>
              <Grid item sm={12}>
                <Box display={"flex"} gap={"1rem"}>
                  <Box display={"flex"}>
                    <Box display={"flex"}>
                      <Bed fontSize="8px" />
                      <Typography fontSize={"10px"} m={"0 !important"}>
                        {prop.bedroom}
                      </Typography>
                    </Box>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ p: "0 0.25rem" }}
                    />
                    <Box display={"flex"} gap={"0.25rem"}>
                      <Bathtub fontSize="8px" />
                      <Typography fontSize={"10px"} m={"0 !important"}>
                        {prop.bathroom}
                      </Typography>
                    </Box>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ p: "0 0.25rem" }}
                    />
                    <Box display={"flex"} gap={"0.25rem"}>
                      <ZoomOutMapSharp fontSize="8px" />
                      <Typography fontSize={"10px"} m={"0 !important"}>
                        {prop.area}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
