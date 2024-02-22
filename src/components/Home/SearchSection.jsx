import { Add, Remove, Search } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";

const amenityList = [
  "Back yard",
  "Central Air",
  "Chair Accessible",
  "Front yard",
  "Garage Attached",
  "Laundry",
];

const Item = styled(Paper)(({ theme }) => {
  return {
    ...theme.typography.body2,
    textAlign: "left",
    color: theme.palette.text.secondary,
    width: "100%",
    boxShadow: "none",
    borderRadius: "1rem",
  };
});

export default function SearchSection() {
  const [type, setType] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [moreOptions, setMoreOptions] = useState(false);
  const [amenities, setAmenities] = useState(
    Array(amenityList.length).fill(false)
  );

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleBedroomChange = (event) => {
    setBedroom(event.target.value);
  };

  const handleBathroomChange = (event) => {
    setBathroom(event.target.value);
  };

  const toggleShowMoreOptions = () => {
    setMoreOptions(!moreOptions);
  };

  const handleChangeAmenity = (index) => {
    setAmenities((prev) =>
      prev.map((ind) => {
        if (ind == index) prev[ind] = !prev[ind];
      })
    );
  };

  return (
    <Box
      component={"div"}
      sx={{
        p: { md: "3rem", lg: "5rem" },
        // backgroundImage:
        //   "url(https://res.cloudinary.com/dov9kdlci/image/upload/v1708298559/pexels-david-mcbee-1546168_bpplg9.jpg)",
        backgroundImage: "url(/images/8.jpg)",
        backgroundPositionY: "50%",
      }}
      width={1}
    >
      <Container
        sx={{
          color: "white",
          bgcolor: "rgba(0, 0, 0, 0.35)",
          p: "1rem",
          textAlign: "center",
        }}
      >
        <Typography variant={"h3"}>Search for a Property</Typography>
        <Typography variant="h5" m={"0.5rem 0"}>
          Get your preferred properties using the advance search section
        </Typography>
        <Box
          p={"1.5rem"}
          pl={0}
          mt={"1rem"}
          bgcolor={"white"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-end"}
          gap={"1.5rem"}
        >
          <Grid container spacing={3} maxWidth={"100%"} ml={0}>
            <Grid item md={3}>
              <Item>
                <FormControl sx={{ minWidth: 120, width: "100%" }}>
                  <InputLabel id="demo-select-small-label">
                    Product Type
                  </InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={type}
                    label="Product Type"
                    onChange={handleTypeChange}
                    sx={{ textAlign: "left" }}
                  >
                    <MenuItem value="">
                      <em>Product Type</em>
                    </MenuItem>
                    <MenuItem value={"apartment"}>Apartment</MenuItem>
                    <MenuItem value={"villa"}>Villa</MenuItem>
                    <MenuItem value={"shop"}>Shop</MenuItem>
                    <MenuItem value={"amenities"}>Amenities</MenuItem>
                  </Select>
                </FormControl>
              </Item>
            </Grid>
            <Grid item md={3}>
              <Item>
                <FormControl sx={{ minWidth: 120, width: "100%" }}>
                  <InputLabel id="demo-select-small-label">Bedroom</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={bedroom}
                    label="Bedroom"
                    onChange={handleBedroomChange}
                    sx={{ textAlign: "left" }}
                  >
                    <MenuItem value="">
                      <em>Bedroom</em>
                    </MenuItem>
                    <MenuItem value={"0"}>0</MenuItem>
                    <MenuItem value={"1"}>1</MenuItem>
                    <MenuItem value={"2"}>2</MenuItem>
                    <MenuItem value={"3"}>3</MenuItem>
                    <MenuItem value={"4"}>4</MenuItem>
                    <MenuItem value={"5"}>5</MenuItem>
                    <MenuItem value={"5+"}>5+</MenuItem>
                  </Select>
                </FormControl>
              </Item>
            </Grid>
            <Grid item md={3}>
              <Item>
                <FormControl sx={{ minWidth: 120, width: "100%" }}>
                  <InputLabel id="demo-select-small-label">Bathroom</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={bathroom}
                    label="Bathroom"
                    onChange={handleBathroomChange}
                    sx={{ textAlign: "left" }}
                  >
                    <MenuItem value="">
                      <em>Bathroom</em>
                    </MenuItem>
                    <MenuItem value={"0"}>0</MenuItem>
                    <MenuItem value={"1"}>1</MenuItem>
                    <MenuItem value={"2"}>2</MenuItem>
                    <MenuItem value={"3"}>3</MenuItem>
                    <MenuItem value={"4"}>4</MenuItem>
                    <MenuItem value={"5"}>5</MenuItem>
                    <MenuItem value={"5+"}>5+</MenuItem>
                  </Select>
                </FormControl>
              </Item>
            </Grid>
            <Grid item flexGrow={1} sx={{ pt: "1.5rem" }}>
              <Button
                variant="contained"
                fullWidth
                sx={{ height: "100%" }}
                endIcon={<Search />}
                size="large"
              >
                Search
              </Button>
            </Grid>
          </Grid>

          {moreOptions && (
            <Grid container spacing={1} maxWidth={"100%"} ml={0} p={"1rem"}>
              {amenityList.map((amenity, index) => (
                <Grid key={amenity} item md={3} textAlign={"left"}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={amenities[index]}
                        onChange={() => handleChangeAmenity(index)}
                        size="large"
                      />
                    }
                    label={amenity}
                    sx={{ color: "black", fontSize: "1.1rem" }}
                  />
                </Grid>
              ))}
            </Grid>
          )}
          <Button
            variant={"text"}
            endIcon={!moreOptions ? <Add /> : <Remove />}
            onClick={() => toggleShowMoreOptions()}
          >
            {!moreOptions ? "More " : "Less "} Options
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
