import { Box } from "@mui/material";

import { CldVideoPlayer, getCldImageUrl } from "next-cloudinary";
import { useEffect, useRef, useState } from "react";

export default function IntroVideoSection() {
  const player = useRef();

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      player.current?.play();
    });

    const handleScrollVideoControl = () => {
      let videoContainer = document?.getElementById("video-container");

      let videoContainerBottom =
        videoContainer.clientTop + videoContainer.clientHeight;

      let muted = player.current?.isMuted();

      if (window.scrollY >= videoContainerBottom) {
        player.current?.pause();
      } else {
        if (muted) player.current?.mute();
      }
    };

    window.addEventListener("scroll", handleScrollVideoControl);

    return function cleanEventListener() {
      window.removeEventListener("scroll", handleScrollVideoControl);
    };
  }, []);

  return (
    <Box
      position={"relative"}
      component={"div"}
      sx={{
        p: 0,
        backgroundSize: "cover",
        backgroundPositionY: "50%",
        height: { xs: "30vh", md: "80vh" },
      }}
      width={1}
    >
      <Box
        id="video-container"
        display={"flex"}
        height={1}
        justifyContent={"center"}
        width={1}
      >
        <Box
          height={1}
          sx={{ aspectRatio: "840/480" }}
          display={"flex"}
          overflow={"hidden"}
          justifyContent={"center"}
        >
          <CldVideoPlayer
            playerRef={player}
            width="1680"
            height="960"
            autoplay
            quality={"1080"}
            loop={true}
            muted
            src={process.env.videoPublicKey}
            logo={{
              imageUrl: getCldImageUrl({
                src: process.env.logoPublicKey,
              }),
              onClickUrl: "/contact-us",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
