import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { GiTrashCan } from "react-icons/gi";
import ImageUpload from "../Components/ImageUpload";
import { Edit, Save } from "@mui/icons-material";
import { useDashboardStore } from "@/stores/dashboardStore";
import handleAddSite from "./utils/handleAddSite";
import axios from "axios";
import { backEndUrls, chosenBackendUrl } from "@/pages";
import handleUpdateSite from "./utils/handleUpdateSite";
import hasSiteValueChanged from "./utils/hasSiteValueChanged";
import { useTokenStore } from "@/stores/tokenStore";

function AddSiteComponent({ setAddSite, setLoading, setSnackBar }) {
  const {
    updateSites,
    site,
    setSite,
    setRealEstateListOptions,
    realEstateListOptions,
  } = useDashboardStore();

  const [name, setName] = useState(site?.name);
  const [realEstate, setRealEstate] = useState(site?.realEstate?.id || "");
  const [description, setDescription] = useState(site?.description || "");
  const [location, setLocation] = useState(site?.location);
  const [footPrintArea, setFootPrintArea] = useState(site?.footPrintArea);
  const [builtUpArea, setBuiltUpArea] = useState(site?.builtUpArea);
  const [floors, setFloors] = useState(site?.floors);
  const [basementCount, setBasementCount] = useState(site?.basementCount);
  const [parkingLots, setParkingLots] = useState(site?.parkingLots);
  const [studios, setStudios] = useState(site?.studios);
  const [oneBedrooms, setOneBedrooms] = useState(site?.oneBedrooms);
  const [twoBedrooms, setTwoBedrooms] = useState(site?.twoBedrooms);
  const [threeBedrooms, setThreeBedrooms] = useState(site?.threeBedrooms);
  const [numberOfUnits, setNumberOfUnits] = useState(site?.numberOfUnits);
  const [buildingType, setBuildingType] = useState(site?.buildingType);
  const [apartmentSizes, setApartmentSizes] = useState(site?.apartmentSizes);
  const [stage, setStage] = useState(site?.stage);
  const [deliveryTime, setDeliveryTime] = useState(site?.deliveryTime);

  const [price, setPrice] = useState(site?.price);
  const [imageList, setImageList] = useState(site?.images || []);
  const [status, setStatus] = useState(site?.status);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const { token } = useTokenStore();

  useEffect(() => {
    axios.get(`${chosenBackendUrl}realestate/list`).then(({ data }) => {
      setRealEstateListOptions(data.realEstates);
    });
  }, []);

  return (
    <>
      <Stack direction={"row"} gap={2}>
        <Typography
          fontSize={"2rem"}
          fontWeight={"bold"}
          color={"text.primary"}
          lineHeight={1}
          flex={1}
        >
          Add Site
        </Typography>

        {site && (
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Status"
                onChange={handleStatusChange}
              >
                <MenuItem value={"draft"}>Draft</MenuItem>
                <MenuItem value={"active"}>Active</MenuItem>
                <MenuItem value={"inactive"}>Inactive</MenuItem>
              </Select>
            </FormControl>
          </Box>
        )}
        <Button
          variant="contained"
          color="riseLight"
          startIcon={<GiTrashCan />}
          onClick={() => {
            setSite(null);
            setAddSite(false);
          }}
        >
          Cancel
        </Button>

        {site && (
          <Button
            variant="contained"
            color="riseLight"
            startIcon={<Edit />}
            disabled={
              !hasSiteValueChanged({
                site,
                name,
                realEstate,
                description,
                location,
                footPrintArea,
                builtUpArea,
                floors,
                basementCount,
                parkingLots,
                studios,
                oneBedrooms,
                twoBedrooms,
                threeBedrooms,
                numberOfUnits,
                buildingType,
                apartmentSizes,
                deliveryTime,
                imageList,
                stage,
                status,
                price,
              })
            }
            onClick={() =>
              handleUpdateSite({
                id: site.id,
                name,
                realEstate,
                description,
                location,
                footPrintArea,
                builtUpArea,
                floors,
                basementCount,
                parkingLots,
                studios,
                oneBedrooms,
                twoBedrooms,
                threeBedrooms,
                numberOfUnits,
                buildingType,
                apartmentSizes,
                deliveryTime,
                images: imageList,
                stage,
                status,
                price,
                token,

                setLoading,
                updateSites,
                setSnackBar,
                setAddSite,
                setSite,
              })
            }
          >
            Update
          </Button>
        )}

        <Button
          variant="contained"
          color="riseLight"
          startIcon={<Save />}
          disabled={site !== null}
          onClick={() =>
            handleAddSite({
              name,
              realEstate,
              description,
              location,
              footPrintArea,
              builtUpArea,
              floors,
              basementCount,
              parkingLots,
              studios,
              oneBedrooms,
              twoBedrooms,
              threeBedrooms,
              numberOfUnits,
              buildingType,
              apartmentSizes,
              deliveryTime,
              images: imageList,
              stage,
              price,
              token,

              setLoading,
              updateSites,
              setSnackBar,
              setAddSite,
              setSite,
            })
          }
        >
          Save
        </Button>
      </Stack>

      <Stack flex={1} height={1} overflow={"hidden"}>
        <Grid container spacing={4} height={1}>
          <Grid item xs={6} height={1}>
            <Stack
              gap={2}
              height={1}
              pt={0.5}
              pb={2}
              pr={1}
              flex={1}
              sx={{ overflowY: "scroll" }}
            >
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    id="site-name"
                    size="small"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                  />
                </Grid>

                <Grid item xs={8}>
                  <FormControl size="small" fullWidth>
                    <InputLabel id="real-estate-select-label">
                      RealEstate
                    </InputLabel>
                    <Select
                      size="small"
                      labelId="real-estate-select-label"
                      id="demo-simple-select"
                      value={realEstate}
                      label="RealEstate"
                      onChange={({ target }) => setRealEstate(target.value)}
                    >
                      <MenuItem value={""}>Select Real-estate</MenuItem>
                      {realEstateListOptions.map((rs) => (
                        <MenuItem key={rs.id} value={rs.id}>
                          {rs.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="site-description"
                    size="small"
                    label="Background"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={description}
                    onChange={({ target }) => setDescription(target.value)}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="site-location"
                    size="small"
                    label="Location"
                    variant="outlined"
                    value={location}
                    onChange={({ target }) => setLocation(target.value)}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="site-building-type"
                    size="small"
                    label="Building type"
                    variant="outlined"
                    value={buildingType}
                    onChange={({ target }) => setBuildingType(target.value)}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="site-apartment-sizes"
                    size="small"
                    label="Apartment sizes"
                    variant="outlined"
                    value={apartmentSizes}
                    onChange={({ target }) => setApartmentSizes(target.value)}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="site-parking-lots"
                    size="small"
                    label="Parking lots"
                    variant="outlined"
                    value={parkingLots}
                    onChange={({ target }) => setParkingLots(target.value)}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="site-total-units"
                    size="small"
                    label="Total number of units"
                    variant="outlined"
                    value={numberOfUnits}
                    type={"number"}
                    onChange={({ target }) => setNumberOfUnits(target.value)}
                  />
                </Grid>

                <Grid item xs={12} mt={2} mb={-1}>
                  <Typography>Room Information</Typography>
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="site-studios-count"
                    size="small"
                    label="Studios"
                    variant="outlined"
                    value={studios}
                    type={"number"}
                    onChange={({ target }) => setStudios(target.value)}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="site-one-bedroom-count"
                    size="small"
                    label="One Bedroom"
                    variant="outlined"
                    value={oneBedrooms}
                    type="number"
                    onChange={({ target }) => setOneBedrooms(target.value)}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="site-two-bedroom-count"
                    size="small"
                    label="Two Bedroom"
                    variant="outlined"
                    value={twoBedrooms}
                    type="number"
                    onChange={({ target }) => setTwoBedrooms(target.value)}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="site-three-bedroom-count"
                    size="small"
                    label="Three Bedroom"
                    variant="outlined"
                    value={threeBedrooms}
                    type="number"
                    onChange={({ target }) => setThreeBedrooms(target.value)}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="site-floor-count"
                    size="small"
                    label="Number of floors"
                    variant="outlined"
                    value={floors}
                    type="number"
                    onChange={({ target }) => setFloors(target.value)}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="site-basement-count"
                    size="small"
                    label="Number of Basement"
                    variant="outlined"
                    value={basementCount}
                    type="number"
                    onChange={({ target }) => setBasementCount(target.value)}
                  />
                </Grid>

                <Grid item xs={12} mt={2} mb={-1}>
                  <Typography>Area Information</Typography>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="site-foot-print-area"
                    size="small"
                    label="Footprint Area"
                    variant="outlined"
                    value={footPrintArea}
                    type="number"
                    onChange={({ target }) => setFootPrintArea(target.value)}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="site-built-up-area"
                    size="small"
                    label="Built-up Area"
                    variant="outlined"
                    value={builtUpArea}
                    type="number"
                    onChange={({ target }) => setBuiltUpArea(target.value)}
                  />
                </Grid>

                <Grid item xs={12} mt={2} mb={-1}>
                  <Typography>Status</Typography>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="site-delivery-time"
                    size="small"
                    label="Delivery Time"
                    variant="outlined"
                    value={deliveryTime}
                    onChange={({ target }) => setDeliveryTime(target.value)}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="site-stage"
                    size="small"
                    label="Stage"
                    variant="outlined"
                    value={stage}
                    onChange={({ target }) => setStage(target.value)}
                  />
                </Grid>

                <Grid item xs={12} mt={2} mb={-1}>
                  <Typography>Price</Typography>
                </Grid>

                <Grid item xs={2} mr={-2}>
                  <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    height={1}
                  >
                    <Typography>{site?.site?.currency || "ETB"}</Typography>
                  </Stack>
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="site-price"
                    size="small"
                    label="Price"
                    variant="outlined"
                    value={price}
                    onChange={({ target }) => setPrice(target.value)}
                  />
                </Grid>
              </Grid>
            </Stack>
          </Grid>

          <Grid item xs={6} height={1}>
            <Stack gap={2} height={1} overflow={"scroll"}>
              <ImageUpload imageList={imageList} setImageList={setImageList} />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default AddSiteComponent;
