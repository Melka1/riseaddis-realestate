import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { GiTrashCan } from "react-icons/gi";
import ImageUpload from "../Components/ImageUpload";
import { Edit, Save } from "@mui/icons-material";
import handleAddRealEstate from "./utils/handleAddRealEstate";
import { useDashboardStore } from "@/stores/dashboardStore";
import { deepEqual } from "@/utils/checkEquality";
import handleUpdateRealEstate from "./utils/handleUpdateRealEstate";
import hasRealEstateValueChanged from "./utils/hasRealEstateValueChanged";

function AddRealEstateComponent({ setAddRealEstate, setLoading, setSnackBar }) {
  const { updateRealEstates, realEstate, setRealEstate } = useDashboardStore();

  const [name, setName] = useState(realEstate?.name || "");
  const [background, setBackground] = useState(realEstate?.background || "");

  const [sisterCompaniesList, setSisterCompaniesList] = useState(
    realEstate?.sisterCompanies || []
  );
  const [addSisterCompany, setAddSisterCompany] = useState(false);

  const [previousProjectList, setPreviousProjectList] = useState(
    realEstate?.previousProjects || []
  );
  const [addPreviousProject, setAddPreviousProject] = useState(false);

  const [activeProjectList, setActiveProjectList] = useState(
    realEstate?.activeProjects || []
  );
  const [addActiveProject, setAddActiveProject] = useState(false);

  const [imageList, setImageList] = useState(realEstate?.images || []);

  const handleAddActiveProject = () => {
    if (!addActiveProject) {
      setAddActiveProject(true);
      return;
    }

    let activeProject = document.getElementById("active-project").value;

    if (!activeProject) return;
    setActiveProjectList((prev) => [...prev, activeProject]);
    setAddActiveProject(false);
  };

  const handleAddSisterCompany = () => {
    if (!addSisterCompany) {
      setAddSisterCompany(true);
      return;
    }

    let sisterCompany = document.getElementById("sister-company").value;

    if (!sisterCompany) return;
    setSisterCompaniesList((prev) => [...prev, sisterCompany]);
    setAddSisterCompany(false);
  };

  const handleAddPreviousProject = () => {
    if (!addPreviousProject) {
      setAddPreviousProject(true);
      return;
    }

    let previousProject = document.getElementById("previous-project").value;

    if (!previousProject) return;
    setPreviousProjectList((prev) => [...prev, previousProject]);
    setAddPreviousProject(false);
  };

  console.log(name);

  const [status, setStatus] = useState(realEstate?.status);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

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
          Add Real Estate
        </Typography>

        {realEstate && (
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
            setRealEstate(null);
            setAddRealEstate(false);
          }}
        >
          Cancel
        </Button>

        {realEstate && (
          <Button
            variant="contained"
            color="riseLight"
            startIcon={<Edit />}
            disabled={
              !hasRealEstateValueChanged({
                realEstate,
                name,
                background,
                activeProjectList,
                previousProjectList,
                sisterCompaniesList,
                imageList,
                status,
              })
            }
            onClick={() =>
              handleUpdateRealEstate({
                id: realEstate.id,
                name,
                background,
                activeProjects: activeProjectList,
                previousProjects: previousProjectList,
                sisterCompanies: sisterCompaniesList,
                images: imageList,
                status,

                setLoading,
                updateRealEstates,
                setSnackBar,
                setAddRealEstate,
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
          disabled={realEstate !== null}
          onClick={() =>
            handleAddRealEstate({
              name,
              background,
              activeProjects: activeProjectList,
              previousProjects: previousProjectList,
              sisterCompanies: sisterCompaniesList,
              images: imageList,

              setLoading,
              updateRealEstates,
              setSnackBar,
              setAddRealEstate,
              setRealEstate,
            })
          }
        >
          Save
        </Button>
      </Stack>

      <Stack flex={1} height={1} overflow={"hidden"}>
        <Grid container spacing={2} height={1}>
          <Grid item xs={6} height={1}>
            <Stack
              gap={2}
              p={"2rem"}
              height={1}
              pt={0.5}
              flex={1}
              sx={{ overflowY: "scroll" }}
            >
              <TextField
                id="realestate-name"
                size="small"
                label="Name"
                variant="outlined"
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
              <TextField
                id="realestate-background"
                size="small"
                label="Background"
                variant="outlined"
                multiline
                rows={4}
                value={background}
                onChange={({ target }) => setBackground(target.value)}
              />

              <Stack
                gap={1}
                sx={{
                  display: "flex",
                  border: "1px solid gray",
                  borderRadius: "0.25rem",
                  p: "1rem",
                }}
              >
                <Typography color={"gray"}>Previous Project List</Typography>
                <Stack gap={1}>
                  {previousProjectList.map((name, index) => (
                    <Box key={index} position={"relative"}>
                      <Typography
                        sx={{
                          p: "0.5rem 2rem",
                          border: "1px solid lightgray",
                          borderRadius: "0.25rem",
                        }}
                      >
                        {name}
                      </Typography>
                      <IconButton
                        color="error"
                        onClick={() =>
                          setPreviousProjectList((prev) =>
                            prev.filter((p, i) => i !== index)
                          )
                        }
                        sx={{ position: "absolute", right: 0, top: 0 }}
                      >
                        <GiTrashCan />
                      </IconButton>
                    </Box>
                  ))}
                  {addPreviousProject && (
                    <TextField
                      id="previous-project"
                      size="small"
                      label="Project Name"
                      variant="outlined"
                    />
                  )}
                </Stack>
                <Stack direction={"row"} gap={2}>
                  <Button
                    color="rise"
                    fullWidth
                    variant="contained"
                    onClick={() => handleAddPreviousProject()}
                  >
                    Add
                  </Button>
                  <Button
                    color="error"
                    fullWidth
                    variant="contained"
                    onClick={() => setAddPreviousProject(false)}
                  >
                    Cancel
                  </Button>
                </Stack>
              </Stack>

              <Stack
                gap={1}
                sx={{
                  display: "flex",
                  border: "1px solid gray",
                  borderRadius: "0.25rem",
                  p: "1rem",
                }}
              >
                <Typography color={"gray"}>Active Project List</Typography>
                <Stack gap={1}>
                  {activeProjectList.map((name, index) => (
                    <Box key={index} position={"relative"}>
                      <Typography
                        sx={{
                          p: "0.5rem 2rem",
                          border: "1px solid lightgray",
                          borderRadius: "0.25rem",
                        }}
                      >
                        {name}
                      </Typography>
                      <IconButton
                        color="error"
                        onClick={() =>
                          setActiveProjectList((prev) =>
                            prev.filter((p, i) => i !== index)
                          )
                        }
                        sx={{ position: "absolute", right: 0, top: 0 }}
                      >
                        <GiTrashCan />
                      </IconButton>
                    </Box>
                  ))}
                  {addActiveProject && (
                    <TextField
                      id="active-project"
                      size="small"
                      label="Project Name"
                      variant="outlined"
                    />
                  )}
                </Stack>
                <Stack direction={"row"} gap={2}>
                  <Button
                    color="rise"
                    fullWidth
                    variant="contained"
                    onClick={() => handleAddActiveProject()}
                  >
                    Add
                  </Button>
                  <Button
                    color="error"
                    fullWidth
                    variant="contained"
                    onClick={() => setAddActiveProject(false)}
                  >
                    Cancel
                  </Button>
                </Stack>
              </Stack>

              <Stack
                gap={1}
                sx={{
                  display: "flex",
                  border: "1px solid gray",
                  borderRadius: "0.25rem",
                  p: "1rem",
                }}
              >
                <Typography color={"gray"}>Sister Companies</Typography>
                <Stack gap={1}>
                  {sisterCompaniesList.map((name, index) => (
                    <Box key={index} position={"relative"}>
                      <Typography
                        sx={{
                          p: "0.5rem 2rem",
                          border: "1px solid lightgray",
                          borderRadius: "0.25rem",
                        }}
                      >
                        {name}
                      </Typography>
                      <IconButton
                        color="error"
                        onClick={() =>
                          setSisterCompaniesList((prev) =>
                            prev.filter((p, i) => i !== index)
                          )
                        }
                        sx={{ position: "absolute", right: 0, top: 0 }}
                      >
                        <GiTrashCan />
                      </IconButton>
                    </Box>
                  ))}
                  {addSisterCompany && (
                    <TextField
                      id="sister-company"
                      size="small"
                      label="Sister company name"
                      variant="outlined"
                    />
                  )}
                </Stack>
                <Stack direction={"row"} gap={2}>
                  <Button
                    color="rise"
                    fullWidth
                    variant="contained"
                    onClick={() => handleAddSisterCompany()}
                  >
                    Add
                  </Button>
                  <Button
                    color="error"
                    fullWidth
                    variant="contained"
                    onClick={() => setAddSisterCompany(false)}
                  >
                    Cancel
                  </Button>
                </Stack>
              </Stack>
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

export default AddRealEstateComponent;
