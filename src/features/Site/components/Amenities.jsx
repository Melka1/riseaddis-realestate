import ListItem from "@/components/ListItem";
import { Box, Grid, Typography } from "@mui/material";
import { Kufam } from "next/font/google";

const kufam = Kufam({ subsets: ["arabic"] });

function Amenities({ amenities }) {
  if (!amenities?.length) return <></>;
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
        {amenities.map((amenity) => (
          <ListItem
            key={amenity.id}
            imageUrl={amenity.image.imageUrl}
            name={amenity.name}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default Amenities;
