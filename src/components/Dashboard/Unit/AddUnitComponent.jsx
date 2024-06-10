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
import { useEffect, useRef, useState } from "react";
import { GiTrashCan } from "react-icons/gi";
import ImageUpload from "../Components/ImageUpload";
import { Edit, Save } from "@mui/icons-material";
import { useDashboardStore } from "@/stores/dashboardStore";
import handleAddUnit from "./utils/handleAddUnit";
import axios from "axios";
import { backEndUrls } from "@/pages";
import handleUpdateUnit from "./utils/handleUpdateUnit";
import hasUnitValueChanged from "./utils/hasUnitValueChanged";

function AddUnitComponent({ setAddUnit, setLoading, setSnackBar }) {
  const { updateUnits, unit, setUnit, setSiteListOptions, siteListOptions } =
    useDashboardStore();

  const nameRef = useRef();
  const [name, setName] = useState(unit?.name);
  const [site, setSite] = useState(unit?.site?.id);
  const [bedroom, setBedroom] = useState(unit?.bedroom);
  const [bathroom, setBathroom] = useState(unit?.bathroom);
  const [balcony, setBalcony] = useState(unit?.balcony);
  const [netArea, setNetArea] = useState(unit?.netArea);
  const [commonArea, setCommonArea] = useState(unit?.commonArea);
  const [totalArea, setTotalArea] = useState(unit?.totalArea);
  const [total, setTotal] = useState(unit?.total);
  const [available, setAvailable] = useState(unit?.available);
  const [price, setPrice] = useState(unit?.price);
  const [imageList, setImageList] = useState(unit?.images || []);
  const [status, setStatus] = useState(unit?.status);
  console.log(unit?.total);
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  useEffect(() => {
    axios.get(`${backEndUrls.local}site/list`).then((res) => {
      console.log(res.data.sites);
      setSiteListOptions(res.data.sites);
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
          Add Unit
        </Typography>

        {unit && (
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
            setUnit(null);
            setAddUnit(false);
          }}
        >
          Cancel
        </Button>

        {unit && (
          <Button
            variant="contained"
            color="riseLight"
            startIcon={<Edit />}
            disabled={
              !hasUnitValueChanged({
                unit,
                name,
                site,
                bedroom,
                balcony,
                bathroom,
                netArea,
                commonArea,
                totalArea,
                total,
                price,
                imageList,
                status,
                available,
              })
            }
            onClick={() =>
              handleUpdateUnit({
                id: unit.id,
                name,
                site,
                bedroom,
                bathroom,
                balcony,
                netArea,
                commonArea,
                totalArea,
                available,
                total,
                price,
                images: imageList,
                status,

                setLoading,
                updateUnits,
                setSnackBar,
                setAddUnit,
                setUnit,
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
          disabled={unit !== null}
          onClick={() =>
            handleAddUnit({
              name,
              site,
              bedroom,
              bathroom,
              balcony,
              netArea,
              commonArea,
              totalArea,
              available,
              total,
              price,
              images: imageList,

              setLoading,
              updateUnits,
              setSnackBar,
              setAddUnit,
              setUnit,
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
              flex={1}
              sx={{ overflowY: "scroll" }}
            >
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    id="unit-name"
                    size="small"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                  />
                </Grid>

                <Grid item xs={8}>
                  <FormControl size="small" fullWidth>
                    <InputLabel id="demo-simple-select-label">Site</InputLabel>
                    <Select
                      size="small"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={site}
                      label="Status"
                      onChange={({ target }) => setSite(target.value)}
                    >
                      {siteListOptions.map((site) => (
                        <MenuItem key={site.id} value={site.id}>
                          {site.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} mt={2} mb={-1}>
                  <Typography>Room Information</Typography>
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="unit-bedroom-count"
                    size="small"
                    label="Bedroom"
                    variant="outlined"
                    value={bedroom}
                    type={"number"}
                    onChange={({ target }) => setBedroom(target.value)}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="unit-bathroom-count"
                    size="small"
                    label="Bathroom"
                    variant="outlined"
                    value={bathroom}
                    type="number"
                    onChange={({ target }) => setBathroom(target.value)}
                  />
                </Grid>

                <Grid item xs={4}>
                  <FormControl size="small" fullWidth>
                    <InputLabel id="select-balcony-label">Balcony</InputLabel>
                    <Select
                      size="small"
                      labelId="select-balcony-label"
                      id="select-balcony"
                      value={balcony}
                      label="Balcony"
                      onChange={({ target }) => setBalcony(target.value)}
                    >
                      <MenuItem value={null}>Balcony</MenuItem>
                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} mt={2} mb={-1}>
                  <Typography>Area Information</Typography>
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="unit-net-area"
                    size="small"
                    label="Net Area"
                    variant="outlined"
                    value={netArea}
                    type="number"
                    onChange={({ target }) => setNetArea(target.value)}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="unit-common-area"
                    size="small"
                    label="Common Area"
                    variant="outlined"
                    value={commonArea}
                    type="number"
                    onChange={({ target }) => setCommonArea(target.value)}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="unit-total-area"
                    size="small"
                    label="Total Area"
                    variant="outlined"
                    value={totalArea}
                    type="number"
                    onChange={({ target }) => setTotalArea(target.value)}
                  />
                </Grid>

                <Grid item xs={12} mt={2} mb={-1}>
                  <Typography>Total and Available Units</Typography>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="total-unit"
                    size="small"
                    label="Total Units"
                    variant="outlined"
                    type="number"
                    value={total}
                    onChange={({ target }) => {
                      console.log(typeof target.value, target.value);
                      setTotal(target.value);
                    }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="available-unit"
                    size="small"
                    label="Available Units"
                    variant="outlined"
                    type={"number"}
                    value={available}
                    onChange={({ target }) => {
                      console.log(target.value, typeof target.value);
                      setAvailable(target.value);
                    }}
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
                    <Typography>{unit?.site?.currency || "ETB"}</Typography>
                  </Stack>
                </Grid>

                <Grid item xs={5}>
                  <TextField
                    fullWidth
                    id="unit-price"
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

export default AddUnitComponent;
