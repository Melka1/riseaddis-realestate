import { riseFont } from "@/pages/_app";
import { useImageStore } from "@/stores/imageStore";
import { CloseOutlined, Image } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import handleAddAmenity from "./utils/handleAddAmenity";
import { useTokenStore } from "@/stores/tokenStore";
import { useDashboardStore } from "@/stores/dashboardStore";
import { CldUploadWidget } from "next-cloudinary";
import handleUpdateAmenity from "./utils/handleUpdateAmenity";

function AddAmenityModal({
  amenity,
  open,
  setOpen,
  selectedSite,
  setLoading,
  setSnackBar,
  setSelectedAmenity,
  setSelectedSite,
}) {
  const { token } = useTokenStore();
  const { updateSiteAmenities } = useDashboardStore();
  const { fetchImages, images, addImageToGallery } = useImageStore();
  const [selectedImage, setSelectedImage] = useState(amenity?.image || null);
  const [amenityName, setAmenityName] = useState(amenity?.name || "");

  const isRequestValid = () => {
    if (!amenityName || !selectedImage?.id) {
      setSnackBar({
        open: true,
        message: "Amenity name and Image are required",
        type: "error",
      });
      return false;
    }
    return true;
  };

  useEffect(() => {
    fetchImages({ type: "amenity" });
  }, [fetchImages]);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack alignItems={"center"} justifyContent={"center"} height={1}>
        <Stack
          p={4}
          bgcolor={"riseLight.main"}
          borderRadius={2}
          width={"60%"}
          minWidth={"600px"}
          maxHeight={"70vh"}
          position={"relative"}
          spacing={2}
          flex={1}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontSize={"1.5rem"}
            className={riseFont.className}
            textAlign={"center"}
          >
            {amenity?.name ? "Update" : "Add"} an amenity
          </Typography>

          <Stack flex={1}>
            <Grid container spacing={4} height={1}>
              <Grid item xs={6}>
                <Stack spacing={1}>
                  <Typography fontSize={"1.25rem"}>
                    Realestate: {selectedSite.realEstate}
                  </Typography>
                  <Typography fontSize={"1.1rem"}>
                    Site: {selectedSite.site}
                  </Typography>
                  <Divider flexItem sx={{ py: "1rem" }} />
                  <Stack
                    direction={"row"}
                    spacing={4}
                    height={"60px"}
                    alignItems={"center"}
                    width={1}
                  >
                    <TextField
                      value={amenityName}
                      onChange={({ target }) => setAmenityName(target.value)}
                      placeholder="Amenity name"
                      fullWidth
                    />

                    <Avatar
                      variant="rounded"
                      src={selectedImage?.imageUrl}
                      height={1}
                      borderRadius={1}
                      sx={{
                        height: "60px",
                        width: "60px",
                      }}
                    />
                  </Stack>

                  {!amenity?.name ? (
                    <Button
                      size="large"
                      fullWidth
                      variant="outlined"
                      onClick={() => {
                        if (!isRequestValid()) return;

                        handleAddAmenity({
                          token,
                          amenityName,
                          image: selectedImage.id,
                          siteId: selectedSite.id,

                          setLoading,
                          setSnackBar,
                          updateSiteAmenities,
                          setOpen,
                        });
                      }}
                    >
                      Add
                    </Button>
                  ) : (
                    <Button
                      size="large"
                      fullWidth
                      variant="outlined"
                      onClick={() => {
                        if (!isRequestValid()) return;

                        handleUpdateAmenity({
                          token,
                          amenityId: amenity.id,
                          amenityName,
                          image: selectedImage.id,

                          setLoading,
                          setSnackBar,
                          updateSiteAmenities,
                          setOpen,
                          setSelectedAmenity,
                          setSelectedSite,
                        });
                      }}
                    >
                      Update
                    </Button>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={6} height={1}>
                <Stack
                  border={"1px solid gray"}
                  borderRadius={2}
                  height={1}
                  p={2}
                  overflow={"auto"}
                >
                  <Grid container spacing={2}>
                    {images.map((image) => (
                      <Grid item xs={3} key={image.id}>
                        <Stack
                          width={1}
                          onClick={() => setSelectedImage(image)}
                          sx={{
                            aspectRatio: 1,
                            borderRadius: "0.25rem",
                            cursor: "pointer",
                            "&:hover": { border: "1px solid gray" },
                          }}
                        >
                          <Avatar
                            variant="rounded"
                            sx={{ width: "100%", height: "100%" }}
                            src={image.imageUrl}
                          />
                        </Stack>
                      </Grid>
                    ))}
                    <Grid item xs={3}>
                      <Stack width={1} sx={{ aspectRatio: 1 }}>
                        <CldUploadWidget
                          options={{
                            multiple: false,
                          }}
                          onUpload={({ info }) => {
                            console.log(info);
                            addImageToGallery({
                              token,
                              imageUrl: info.secure_url,
                              name: "amenity",
                            });
                          }}
                          uploadPreset="adse2riv"
                        >
                          {({ open }) => {
                            return (
                              <Button
                                color="rise"
                                variant="outlined"
                                onClick={() => open?.()}
                              >
                                <Stack alignItems={"center"}>
                                  <Image alt="add amenity" />
                                  <Typography
                                    fontSize={"0.7rem"}
                                    textTransform={"capitalize"}
                                    className={riseFont.className}
                                    lineHeight={1.2}
                                  >
                                    Add amenity image
                                  </Typography>
                                </Stack>
                              </Button>
                            );
                          }}
                        </CldUploadWidget>
                      </Stack>
                    </Grid>
                  </Grid>
                </Stack>
              </Grid>
            </Grid>
          </Stack>

          <IconButton
            onClick={() => {
              setSelectedAmenity(null);
              setSelectedSite(null);
              setOpen(false);
            }}
            sx={{ position: "absolute", top: "1rem", right: "1rem" }}
          >
            <CloseOutlined />
          </IconButton>
        </Stack>
      </Stack>
    </Modal>
  );
}

export default AddAmenityModal;
