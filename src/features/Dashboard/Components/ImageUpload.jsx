import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { CldUploadWidget } from "next-cloudinary";
import { GiTrashCan } from "react-icons/gi";
import { TbPhotoPlus } from "react-icons/tb";

const ImageUpload = ({ imageList, setImageList, number }) => {
  const handleRemoveImage = (index) => {
    setImageList((p) => p.filter((i, ind) => index !== ind));
  };

  return (
    <Stack gap={2}>
      <CldUploadWidget
        onUpload={({ info }) => setImageList((p) => [...p, info.secure_url])}
        uploadPreset="adse2riv"
      >
        {({ open }) => {
          return (
            <Button
              sx={{
                position: "relative",
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.7,
                },
                transition: "opacity 0.2s ease-in-out",
                border: "1px dashed gray",
                borderRadius: "0.5rem",
                p: "1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                width: "100%",
                height: "100%",
              }}
              onClick={() => open?.()}
            >
              <Box color={"rise.main"}>
                <TbPhotoPlus size={50} color="inherit" />
              </Box>
              <Typography
                color={"rise.main"}
                fontWeight={"bold"}
                fontSize={"1.2rem"}
              >
                Click to upload
              </Typography>
            </Button>
          );
        }}
      </CldUploadWidget>

      <Grid container spacing={1}>
        {imageList.map((image, index) => (
          <Grid
            item
            key={index}
            xs={number ? 12 / number : 4}
            position={"relative"}
          >
            <Box
              alt="Upload"
              component={"img"}
              bgcolor={"background.paper"}
              width={1}
              style={{ objectFit: "contain", aspectRatio: 16 / 9 }}
              src={image}
            />
            <IconButton
              onClick={() => handleRemoveImage(index)}
              color="error"
              size="small"
              sx={{
                position: "absolute",
                right: "5%",
                top: "5%",
                bgcolor: "background.paper",
                borderColor: "error.main",
                border: "1px solid",
                "&:hover": {
                  bgcolor: "lightgray",
                },
              }}
            >
              <GiTrashCan />
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default ImageUpload;
