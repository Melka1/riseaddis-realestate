import {
  Avatar,
  Divider,
  IconButton,
  Link,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";

function WhatsappContainer() {
  const [displayPhoneList, setDisplayPhoneList] = useState(false);
  const containerRef = useRef(null);

  return (
    <Stack
      position={"fixed"}
      ref={containerRef}
      top={{ xs: "90vh", md: "80vh" }}
      left={{ xs: "0.5rem", sm: "1rem" }}
      zIndex={1001}
      onMouseLeave={() => setDisplayPhoneList(false)}
      sx={{ transform: { sm: "scale(1.5)", md: "scale(1.2)" } }}
    >
      <IconButton
        sx={{ p: "0.25rem", width: "60px", height: "60px" }}
        onClick={() => {
          setDisplayPhoneList((d) => !d);
        }}
        aria-label="whatsapp links"
      >
        <Avatar src="/social/whatsapp.png" alt="whatsapp" />
      </IconButton>
      <Slide
        in={displayPhoneList}
        container={containerRef.current}
        direction="right"
      >
        <Stack
          position={"absolute"}
          bottom={"100%"}
          bgcolor={"success.light"}
          p={"0.25rem"}
          borderRadius={"1rem"}
          color={"riseLight.light"}
          zIndex={1001}
          divider={
            <Divider
              sx={{ m: "0.25rem 2rem", borderColor: "riseLight.light" }}
            />
          }
        >
          <Link
            aria-label="Chat on WhatsApp"
            href="https://wa.me/+251931115566"
            target={"_blank"}
            sx={{
              textDecoration: "none",
              color: "inherit",
              borderRadius: "1rem",
              "&:hover": { bgcolor: "success.main" },
            }}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <Avatar
                sx={{ width: 30, height: 30 }}
                src="/social/whatsapp.png"
              />
              <Typography fontSize={"0.9rem"} px={"0.5rem"}>
                0931115566
              </Typography>
            </Stack>
          </Link>
          <Link
            aria-label="Chat on WhatsApp"
            href="https://wa.me/+251931044444"
            target="_blank"
            sx={{
              textDecoration: "none",
              color: "inherit",
              borderRadius: "2rem",
              "&:hover": { bgcolor: "success.main" },
            }}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <Avatar
                sx={{ width: 30, height: 30 }}
                src="/social/whatsapp.png"
              />
              <Typography fontSize={"0.9rem"} px={"0.5rem"}>
                0931044444
              </Typography>
            </Stack>
          </Link>
        </Stack>
      </Slide>
    </Stack>
  );
}

export default WhatsappContainer;
