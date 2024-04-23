import { Add, Remove, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

import { riseFont } from "@/pages/_app";
import { Item } from "@/containers/ItemPaper";
import { useStore } from "@/Context/store";

export default function SearchSection() {
  const router = useRouter();

  const searchConditions = useStore((state) => state.searchConditions);
  const setSearchConditions = useStore((state) => state.setSearchConditions);

  const { type, bedroom, bathroom, moreOptions, amenities } = searchConditions;
  // console.log(searchConditions, "searchsection");

  return (
    <Box
      component={"div"}
      sx={{
        p: { xs: "2rem 1rem", md: "3rem", lg: "7rem 5rem" },
        // backgroundImage:
        //   "url(https://res.cloudinary.com/dov9kdlci/image/upload/v1708298559/pexels-david-mcbee-1546168_bpplg9.jpg)",
        backgroundImage: "url(./images/11.jpg)",
        backgroundSize: "cover",
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
        <Typography
          variant={"h4"}
          fontSize={{ xs: "1.2rem", sm: "1.5rem" }}
          className={riseFont.className}
        >
          Search for a Property
        </Typography>
        <Typography
          variant="h6"
          m={"0.5rem 0"}
          fontSize={{ xs: "0.85rem", sm: "1rem" }}
          className={riseFont.className}
        >
          Get your preferred properties using the advance search section
        </Typography>
        <Box
          p={"1.5rem"}
          // pl={0}
          mt={"1rem"}
          bgcolor={"white"}
          flexDirection={"column"}
          alignItems={"flex-end"}
          gap={"0.5rem"}
          // borderRadius={"1.5rem"}
          display={{ xs: "none", sm: "flex" }}
        >
          <Grid container spacing={{ xs: 1.5, sm: 3 }} maxWidth={"100%"}>
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <FormControl sx={{ minWidth: 120, width: "100%" }} size="small">
                  <InputLabel id="demo-select-small-label">
                    Product Type
                  </InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={type}
                    label="Product Type"
                    onChange={(e) =>
                      setSearchConditions("type", e.target.value)
                    }
                    sx={{ textAlign: "left", fontSize: "0.85rem" }}
                  >
                    <MenuItem value="">
                      <em>Product Type</em>
                    </MenuItem>
                    <MenuItem value={"apartment"}>Apartment</MenuItem>
                    <MenuItem value={"villa"}>Villa</MenuItem>
                    <MenuItem value={"shop"}>Condominum</MenuItem>
                    <MenuItem value={"amenities"}>House</MenuItem>
                  </Select>
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <FormControl sx={{ minWidth: 120, width: "100%" }} size="small">
                  <InputLabel id="demo-select-small-label">Bedroom</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={bedroom}
                    label="Bedroom"
                    onChange={({ target }) =>
                      setSearchConditions("bedroom", target.value)
                    }
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
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <FormControl sx={{ minWidth: 120, width: "100%" }} size="small">
                  <InputLabel id="demo-select-small-label">Bathroom</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={bathroom}
                    label="Bathroom"
                    onChange={({ target }) =>
                      setSearchConditions("bathroom", target.value)
                    }
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
            <Grid item xs={12} sm={6} md={3} flexGrow={1} sx={{ pt: "1.5rem" }}>
              <Button
                variant="contained"
                fullWidth
                sx={{ height: "100%" }}
                endIcon={<Search />}
                size="medium"
                color="rise"
                // onClick={() => router.push("/property")}
              >
                Search
              </Button>
            </Grid>
          </Grid>

          {moreOptions && (
            <Grid container spacing={0} maxWidth={"100%"} ml={0} p={"1rem"}>
              {amenities.map((amenity, index) => (
                <Grid
                  key={amenity.name}
                  item
                  xs={12}
                  sm={4}
                  md={3}
                  textAlign={"left"}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={amenity.value}
                        onChange={() => setSearchConditions("amenities", index)}
                        size="medium"
                        color="rise"
                      />
                    }
                    label={amenity.name}
                    sx={{
                      color: "rise.main",
                      fontSize: { xs: "0.85rem", sm: "1.1rem" },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          )}
          <Button
            variant={"text"}
            endIcon={!moreOptions ? <Add /> : <Remove />}
            onClick={() => setSearchConditions("moreOptions")}
            color="rise"
          >
            {!moreOptions ? "More " : "Less "} Options
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
