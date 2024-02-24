import {
  CheckCircle,
  KeyboardArrowDown,
  KeyboardArrowUp,
  LocationOn,
  Search,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputBase,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";

const propertyTypeList = [
  { name: "Condominum", value: false },
  { name: "House", value: false },
  { name: "Apartment", value: false },
];

function PropertySearchBar() {
  const [type, setType] = useState("");
  const [openRange1, setOpenRange1] = useState(false);
  const [openRange2, setOpenRange2] = useState(false);
  const [openRange3, setOpenRange3] = useState(false);
  const [openRange4, setOpenRange4] = useState(false);
  const [openRange5, setOpenRange5] = useState(false);

  const [selectAll, setSelectAll] = useState(false);
  const [propListCheck, setPropListCheck] = useState(propertyTypeList);
  const [price, setPrice] = useState(["min", "max"]);
  const [parking, setParking] = useState("Any");
  const [area, setArea] = useState({ min: "any", max: "any" });
  console.log(propListCheck);

  const handleSetParking = (event) => {
    setParking(event.target.value);
  };

  const handleOpenRange1 = () => {
    setOpenRange3(false);
    setOpenRange2(false);
    setOpenRange1((prev) => !prev);
    setOpenRange4(false);
    setOpenRange5(false);
  };

  const handleOpenRange2 = () => {
    setOpenRange3(false);
    setOpenRange1(false);
    setOpenRange2((prev) => !prev);
    setOpenRange4(false);
    setOpenRange5(false);
  };

  const handleOpenRange3 = () => {
    setOpenRange1(false);
    setOpenRange2(false);
    setOpenRange3((prev) => !prev);
    setOpenRange4(false);
    setOpenRange5(false);
  };

  const handleOpenRange4 = () => {
    setOpenRange1(false);
    setOpenRange2(false);
    setOpenRange3(false);
    setOpenRange4((prev) => !prev);
    setOpenRange5(false);
  };
  const handleOpenRange5 = () => {
    setOpenRange1(false);
    setOpenRange2(false);
    setOpenRange3(false);
    setOpenRange4(false);
    setOpenRange5((prev) => !prev);
  };

  const handlePropertyType = (id) => {
    setPropListCheck((prev) =>
      prev.map((val, ind) => {
        if (ind == id) val.value = !val.value;
        return val;
      })
    );
  };

  const handleAreaChange = (event, val) => {
    console.log(area);
    setArea((prev) => ({ ...prev, [val]: event.target.value }));
  };

  return (
    <Box
      border={"1px solid lightgray"}
      p={"0.5rem"}
      display={"flex"}
      width={1}
      gap={"0.5rem"}
      alignItems={"stretch"}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 350,
          border: "1px solid gray",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="City, Neighbourhood, Address"
          inputProps={{ "aria-label": "search google maps" }}
          size="small"
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          {/* <LocationOn /> */}
          <Search />
        </IconButton>
      </Paper>
      <Box position={"relative"}>
        <Button
          size={"small"}
          id="demo-customized-button"
          aria-haspopup="true"
          variant="outlined"
          disableElevation
          sx={{ height: "100%", border: "1px solid lightgray", color: "gray" }}
          onClick={handleOpenRange5}
          endIcon={!openRange5 ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
        >
          Type
        </Button>
        {openRange5 && (
          <Box
            position={"absolute"}
            top={"120%"}
            border={"1px solid lightgray"}
            borderRadius={"0.5rem"}
            minWidth={150}
          >
            <Button
              fullWidth
              variant={type == "for-sale" ? "contained" : "text"}
              color="rise"
              sx={{
                textTransform: "capitalize",
                justifyContent: "left",
                borderRadius: "0.5rem 0.5rem 0 0",
                bgcolor: type == "for-sale" ? "rise.light" : "white",
              }}
              onClick={() => setType("for-sale")}
            >
              For Sale
            </Button>
            <Divider orientation="horizontal" />
            <Button
              fullWidth
              variant={type == "for-rent" ? "contained" : "text"}
              color="rise"
              sx={{
                textTransform: "capitalize",
                justifyContent: "left",
                borderRadius: "0",
                bgcolor: type == "for-rent" ? "rise.light" : "white",
              }}
              onClick={() => setType("for-rent")}
            >
              For Rent
            </Button>
            <Divider orientation="horizontal" />
            <Button
              fullWidth
              variant={type == "sold" ? "contained" : "text"}
              color="rise"
              onClick={() => setType("sold")}
              sx={{
                textTransform: "capitalize",
                justifyContent: "left",
                borderRadius: "0 0 0.5rem 0.5rem",
                bgcolor: type == "sold" ? "rise.light" : "white",
              }}
            >
              Sold
            </Button>
          </Box>
        )}
      </Box>
      <Box position={"relative"}>
        <Button
          size={"small"}
          id="demo-customized-button"
          aria-haspopup="true"
          variant="outlined"
          disableElevation
          sx={{ height: "100%", border: "1px solid lightgray", color: "gray" }}
          onClick={handleOpenRange1}
          endIcon={!openRange1 ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
        >
          Price
        </Button>
        {openRange1 && (
          <Box
            position={"absolute"}
            top={"120%"}
            border={"1px solid lightgray"}
            borderRadius={"0.5rem"}
          >
            <Typography
              bgcolor={"rgba(0,0,0, 0.05)"}
              minWidth={300}
              p={"1rem"}
              fontWeight={600}
              fontSize={"0.85rem"}
              color={"darkslategray"}
            >
              Price Range
            </Typography>
            <Grid container p={"0.5rem"}>
              <Grid item md={5}>
                <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
                  <Typography
                    fontSize={"0.875rem"}
                    fontWeight={"bold"}
                    textAlign={"left"}
                  >
                    Minimum
                  </Typography>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    size="small"
                    value={price[0]}
                    onChange={(e) =>
                      setPrice((prev) => [e.target.value, prev[1]])
                    }
                  >
                    <MenuItem value="min">No min</MenuItem>
                    <MenuItem value={50000}>$50,000</MenuItem>
                    <MenuItem value={100000}>$100,000</MenuItem>
                    <MenuItem value={150000}>$150,000</MenuItem>
                    <MenuItem value={200000}>$200,000</MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Grid item md={2}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"flex-end"}
                  height={"100%"}
                >
                  <Typography p={"0.5rem"} textAlign={"center"}>
                    -
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={5}>
                <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
                  <Typography
                    fontSize={"0.875rem"}
                    fontWeight={"bold"}
                    textAlign={"left"}
                  >
                    Maximum
                  </Typography>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    size="small"
                    value={price[1]}
                    onChange={(e) =>
                      setPrice((prev) => [prev[0], e.target.value])
                    }
                  >
                    <MenuItem value={50000}>$50,000</MenuItem>
                    <MenuItem value={100000}>$100,000</MenuItem>
                    <MenuItem value={150000}>$150,000</MenuItem>
                    <MenuItem value={200000}>$200,000</MenuItem>
                    <MenuItem value="max">Any</MenuItem>
                  </Select>
                </Box>
              </Grid>
            </Grid>
            <Box width={"100%"} p={"0.5rem"}>
              <Button fullWidth variant={"contained"}>
                Apply
              </Button>
            </Box>
          </Box>
        )}
      </Box>
      <Box position={"relative"}>
        <Button
          size={"small"}
          id="demo-customized-button"
          aria-haspopup="true"
          variant="outlined"
          disableElevation
          sx={{ height: "100%", border: "1px solid lightgray", color: "gray" }}
          onClick={handleOpenRange2}
          endIcon={!openRange2 ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
        >
          Beds & Baths
        </Button>
        {openRange2 && (
          <Box
            position={"absolute"}
            top={"120%"}
            border={"1px solid lightgray"}
            borderRadius={"0.5rem"}
          >
            <Typography
              bgcolor={"rgba(0,0,0, 0.05)"}
              minWidth={275}
              p={"1rem"}
              fontWeight={600}
              fontSize={"0.85rem"}
              color={"darkslategray"}
            >
              Number of Bedrooms
            </Typography>
            <Box p={"0.5rem"}>
              <Grid container p={"0rem"}>
                <Grid
                  item
                  md={2}
                  border={"1px solid lightgray"}
                  borderRadius={"0.5rem 0 0 0.5rem"}
                >
                  <Button sx={{ minWidth: "100%", color: "gray" }}>Any</Button>
                </Grid>
                <Grid item md={2} border={"1px solid lightgray"}>
                  <Button sx={{ minWidth: "100%", color: "gray" }}>1+</Button>
                </Grid>
                <Grid item md={2} border={"1px solid lightgray"}>
                  <Button sx={{ minWidth: "100%", color: "gray" }}>2+</Button>
                </Grid>
                <Grid item md={2} border={"1px solid lightgray"}>
                  <Button sx={{ minWidth: "100%", color: "gray" }}>3+</Button>
                </Grid>
                <Grid item md={2} border={"1px solid lightgray"}>
                  <Button sx={{ minWidth: "100%", color: "gray" }}>4+</Button>
                </Grid>
                <Grid
                  item
                  md={2}
                  border={"1px solid lightgray"}
                  borderRadius={"0 0.5rem 0.5rem 0"}
                >
                  <Button sx={{ minWidth: "100%", color: "gray" }}>5+</Button>
                </Grid>
              </Grid>
            </Box>
            <Typography
              bgcolor={"rgba(0,0,0, 0.05)"}
              minWidth={350}
              p={"1rem"}
              fontWeight={600}
              fontSize={"0.85rem"}
              color={"darkslategray"}
            >
              Number of Bathrooms
            </Typography>
            <Box p={"0.5rem"}>
              <Grid
                container
                p={"0rem"}
                // border={"1px solid lightgray"}
                borderRadius={"0.5rem"}
                spacing={0}
              >
                <Grid
                  item
                  md={2}
                  border={"1px solid lightgray"}
                  borderRadius={"0.5rem 0 0 0.5rem"}
                >
                  <Button sx={{ color: "gray", minWidth: "100%" }}>Any</Button>
                </Grid>
                <Grid item md={2} border={"1px solid lightgray"}>
                  <Button sx={{ color: "gray", minWidth: "100%" }}>1+</Button>
                </Grid>
                <Grid item md={2} border={"1px solid lightgray"}>
                  <Button sx={{ color: "gray", minWidth: "100%" }}>2+</Button>
                </Grid>
                <Grid item md={2} border={"1px solid lightgray"}>
                  <Button sx={{ color: "gray", minWidth: "100%" }}>3+</Button>
                </Grid>
                <Grid item md={2} border={"1px solid lightgray"}>
                  <Button sx={{ color: "gray", minWidth: "100%" }}>4+</Button>
                </Grid>
                <Grid
                  item
                  md={2}
                  border={"1px solid lightgray"}
                  borderRadius={"0 0.5rem 0.5rem 0"}
                >
                  <Button sx={{ color: "gray", minWidth: "100%" }}>5+</Button>
                </Grid>
              </Grid>
            </Box>
            <Box width={"100%"} p={"0.5rem"}>
              <Button fullWidth variant={"contained"}>
                Apply
              </Button>
            </Box>
          </Box>
        )}
      </Box>
      <Box position={"relative"}>
        <Button
          size={"small"}
          id="demo-customized-button"
          aria-haspopup="true"
          variant="outlined"
          // color={'primary'}
          disableElevation
          sx={{ height: "100%", border: "1px solid lightgray", color: "gray" }}
          onClick={handleOpenRange3}
          endIcon={!openRange3 ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
        >
          Home Type
        </Button>
        {openRange3 && (
          <Box
            position={"absolute"}
            top={"120%"}
            border={"1px solid lightgray"}
            borderRadius={"0.5rem"}
          >
            <Typography
              bgcolor={"rgba(0,0,0, 0.05)"}
              minWidth={200}
              p={"1rem"}
              fontWeight={600}
              fontSize={"0.85rem"}
              color={"darkslategray"}
            >
              Home Type
            </Typography>
            <Box>
              <Button
                fullWidth
                color={"info"}
                sx={{
                  textTransform: "capitalize",
                  justifyContent: "flex-start",
                  pl: "1rem",
                  backgroundColor: "rgba(0,0,0, 0.05)",
                }}
                startIcon={<CheckCircle color={"info"} />}
                onClick={() => {
                  setPropListCheck((prev) => {
                    console.log(prev);
                    return prev.map((val) => ({
                      ...val,
                      value: selectAll ? true : false,
                    }));
                  });
                  setSelectAll((prev) => !prev);
                }}
              >
                {selectAll ? "Select All" : "Unselect All"}
              </Button>
              <FormGroup sx={{ pl: "1rem", fontSize: "0.875rem" }}>
                {propListCheck.map((prop, index) => {
                  return (
                    <FormControlLabel
                      id={prop.name}
                      key={prop.name}
                      control={
                        <Checkbox
                          color={"default"}
                          checked={prop.value}
                          className={prop.name}
                          size="small"
                        />
                      }
                      sx={{ fontSize: "0.875rem" }}
                      label={prop.name}
                      value={prop.value}
                      onChange={() => handlePropertyType(index)}
                    />
                  );
                })}
              </FormGroup>
              <Box padding={"1rem"}>
                <Button fullWidth variant="contained">
                  Apply
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
      <Box position={"relative"}>
        <Button
          size={"small"}
          id="demo-customized-button"
          aria-haspopup="true"
          variant="outlined"
          // color={'primary'}
          disableElevation
          sx={{ height: "100%", border: "1px solid lightgray", color: "gray" }}
          onClick={handleOpenRange4}
          endIcon={!openRange4 ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
        >
          More
        </Button>
        {openRange4 && (
          <Box
            position={"absolute"}
            top={"120%"}
            right={0}
            border={"1px solid lightgray"}
            borderRadius={"0.5rem"}
          >
            <Typography
              bgcolor={"rgba(0,0,0, 0.05)"}
              minWidth={400}
              p={"1rem"}
              fontWeight={600}
              fontSize={"0.85rem"}
              color={"darkslategray"}
              textTransform={"uppercase"}
            >
              More Flters
            </Typography>
            <Box p={"0.5rem"}>
              <Typography fontSize={"0.875rem"} fontWeight={"bold"}>
                Parking Lots
              </Typography>
              <FormControl
                sx={{ m: "0.5rem 0", minWidth: 120 }}
                size="small"
                fullWidth
              >
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={parking}
                  onChange={handleSetParking}
                  placeholder="No of Parking Lots "
                >
                  <MenuItem value="Any">Any</MenuItem>
                  <MenuItem value={1}>1+</MenuItem>
                  <MenuItem value={2}>2+</MenuItem>
                  <MenuItem value={3}>3+</MenuItem>
                  <MenuItem value={4}>4+</MenuItem>
                  <MenuItem value={5}>5+</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel
                control={<Checkbox color={"default"} defaultChecked />}
                label="Must have garage"
              />
              <Typography fontSize={"0.875rem"} fontWeight={"bold"}>
                Square Meter
              </Typography>
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <FormControl
                    sx={{ m: "0.5rem 0", minWidth: 120 }}
                    size="small"
                    fullWidth
                  >
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={area.min}
                      onChange={(e) => handleAreaChange(e, "min")}
                      placeholder="No of Parking Lots "
                    >
                      <MenuItem value="any">No min</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={65}>65</MenuItem>
                      <MenuItem value={80}>80</MenuItem>
                      <MenuItem value={100}>100</MenuItem>
                      <MenuItem value={140}>140</MenuItem>
                      <MenuItem value={200}>200</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item md={6}>
                  <FormControl
                    sx={{ m: "0.5rem 0", minWidth: 120 }}
                    size="small"
                    fullWidth
                  >
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={area.max}
                      onChange={(e) => handleAreaChange(e, "max")}
                      placeholder="No of Parking Lots "
                    >
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={65}>65</MenuItem>
                      <MenuItem value={80}>80</MenuItem>
                      <MenuItem value={100}>100</MenuItem>
                      <MenuItem value={140}>140</MenuItem>
                      <MenuItem value={200}>200</MenuItem>
                      <MenuItem value="any">No max</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Typography fontSize={"0.875rem"} fontWeight={"bold"}>
                Other Amenities
              </Typography>
              <FormControlLabel
                sx={{ width: "100%" }}
                control={<Checkbox color={"default"} defaultChecked />}
                label="Must have A/C"
              />
              <FormControlLabel
                sx={{ width: "100%" }}
                control={<Checkbox color={"default"} defaultChecked />}
                label="Must have pool"
              />
              <FormControlLabel
                sx={{ width: "100%" }}
                control={<Checkbox color={"default"} defaultChecked />}
                label="Elevetor"
              />
              <FormControlLabel
                sx={{ width: "100%" }}
                control={<Checkbox color={"default"} defaultChecked />}
                label="Playground"
              />
            </Box>
            <Grid container spacing={2} p={"0.5rem"}>
              <Grid item md={6}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ textTransform: "capitalize" }}
                >
                  Reset All Filters
                </Button>
              </Grid>
              <Grid item md={6}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ textTransform: "capitalize" }}
                >
                  Apply
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default PropertySearchBar;
