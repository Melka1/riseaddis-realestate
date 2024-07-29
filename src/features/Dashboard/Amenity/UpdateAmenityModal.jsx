import { riseFont } from "@/pages/_app";
import { CloseOutlined } from "@mui/icons-material";
import { IconButton, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";

function UpdateAmenityModal({ open, setOpen, updateSiteAmenities }) {
  const [amenityList, setAmenityList] = useState(updateSiteAmenities.amenities);
  console.log(amenityList);

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
          minWidth={"700px"}
          maxHeight={"70vh"}
          position={"relative"}
          spacing={2}
          flex={1}
        >
          <Typography
            className={riseFont.className}
            fontSize={"1.7rem"}
            component={"header"}
          >
            Update Amenity
          </Typography>

          <IconButton
            onClick={() => setOpen(false)}
            sx={{ position: "absolute", top: "1rem", right: "1rem" }}
          >
            <CloseOutlined />
          </IconButton>
        </Stack>
      </Stack>
    </Modal>
  );
}

export default UpdateAmenityModal;
