import { userStore } from "@/stores/userStore";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Slide,
  Stack,
  TextField,
} from "@mui/material";
import React, { useRef, useState } from "react";

function ContactUsContainer() {
  const { user } = userStore();
  const [displayPhoneList, setDisplayPhoneList] = useState(false);
  const containerRef = useRef(null);
  const [name, setName] = useState(user?.name || "");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Stack
      position={"fixed"}
      ref={containerRef}
      top={{ xs: "90vh", md: "80vh" }}
      right={{ xs: "0.5rem", sm: "1rem" }}
      zIndex={1001}
      onMouseLeave={() => setDisplayPhoneList(false)}
      sx={{
        transform: { sm: "scale(1.5)", md: "scale(1.2)" },
      }}
    >
      <IconButton
        sx={{
          p: "0.25rem",
          width: "60px",
          height: "60px",
        }}
        onClick={() => {
          setDisplayPhoneList((d) => !d);
        }}
        aria-label="contact us container"
      >
        <Avatar
          sx={{ bgcolor: "white", border: "1px solid darkgray" }}
          src="https://res.cloudinary.com/dchmblw88/image/upload/v1716147685/customer-service_1_u5a99q.png"
          alt="customer service"
        />
      </IconButton>
      <Slide
        in={displayPhoneList}
        container={containerRef.current}
        direction="left"
      >
        <Stack
          position={"absolute"}
          bottom={"100%"}
          right={0}
          bgcolor={"background.paper"}
          p={"1rem"}
          borderRadius={"1rem"}
          border={"1px solid gray"}
          color={"riseLight.light"}
          zIndex={1001}
          width={"250px"}
          gap={1}
        >
          <Box
            component={"img"}
            src="https://res.cloudinary.com/dchmblw88/image/upload/v1715964244/RAP_-_Logo_Design_V02-04_fy5srs.jpg"
            position={"absolute"}
            top={0}
            left={0}
            width={1}
            height={1}
            sx={{ objectFit: "contain", opacity: "0.3" }}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            placeholder="Name"
            value={name}
            onChange={({ targer }) => setName(target.vaue)}
            variant="outlined"
            size="small"
            sx={{
              "&.MuiTextField-root .MuiInputBase-root.MuiOutlinedInput-root ": {
                p: { xs: "0", sm: "0.25rem", md: "0rem" },
                fontSize: "0.8rem",
              },
            }}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            placeholder="Email"
            type={"email"}
            value={user?.email}
            size="small"
            variant="outlined"
            sx={{
              "&.MuiTextField-root .MuiInputBase-root.MuiOutlinedInput-root ": {
                p: { xs: "0", sm: "0.25rem", md: "0rem" },
                fontSize: "0.8rem",
              },
            }}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            placeholder="Phone"
            size="small"
            type={"tel"}
            value={phoneNumber}
            onChange={({ target }) => setPhoneNumber(target.value)}
            variant="outlined"
            sx={{
              "&.MuiTextField-root .MuiInputBase-root.MuiOutlinedInput-root ": {
                p: { xs: "0", sm: "0.25rem", md: "0rem" },
                fontSize: "0.8rem",
              },
            }}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            placeholder="Message"
            size="small"
            variant="outlined"
            value={message}
            onChange={({ target }) => setMessage(target.value)}
            sx={{
              "&.MuiTextField-root .MuiInputBase-root.MuiOutlinedInput-root ": {
                p: { xs: "0.75rem", sm: "1rem", md: "1rem" },
                fontSize: "0.8rem",
              },
            }}
            multiline
            minRows={2}
            maxRows={4}
          />
          <Button
            fullWidth={false}
            variant="contained"
            color="rise"
            sx={{ p: "0.5rem 2rem" }}
            href={`mailto:riseaddis1@gmail.com?subject=${
              name + " " + phoneNumber
            }&body=${message}`}
          >
            Submit
          </Button>
        </Stack>
      </Slide>
    </Stack>
  );
}

export default ContactUsContainer;
