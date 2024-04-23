import ListItem from "@/components/ListItem";
import {
  Apartment,
  Elevator,
  FlashOn,
  FlightTakeoff,
  SelfImprovement,
} from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { Kufam } from "next/font/google";
import { BiSolidCctv } from "react-icons/bi";
import { GiTap } from "react-icons/gi";

const kufam = Kufam({ subsets: ["arabic"] });

function Amenities() {
  return (
    <Box className="amenity-container">
      <Typography
        className={kufam.className}
        fontSize={{ xs: "1.5rem", md: "2rem" }}
        color={"rise.dark"}
        fontWeight={"bold"}
        mt={"2rem"}
      >
        Amenities
      </Typography>

      <Grid container spacing={1} mt={1}>
        <ListItem icon={<FlashOn />} name={"Backup Generator"} />
        <ListItem icon={<GiTap />} name={"Calm living environment"} />
        <ListItem icon={<SelfImprovement />} name={"24×7 Water supply"} />
        <ListItem icon={<Elevator />} name={"Modern elevator"} />
        <ListItem icon={<BiSolidCctv />} name={"CCTV cameras security"} />
        <ListItem icon={<FlightTakeoff />} name={"Next to Airport Village"} />
        <ListItem icon={<Apartment />} name={"Huge basement"} />
      </Grid>
    </Box>
  );
}

export default Amenities;
