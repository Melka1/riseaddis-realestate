"use client";

import { Box } from "@mui/material";
import { CldVideoPlayer, getCldImageUrl } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import { useEffect, useRef, useState } from "react";

const IntroVideo = () => {
  const player = useRef();

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let videoContainer = document?.getElementById("video-container");

      let videoContainerBottom =
        videoContainer.clientTop + videoContainer.clientHeight;

      let muted = player.current?.isMuted();

      if (window.scrollY >= videoContainerBottom) {
        player.current?.pause();
      } else {
        if (muted) player.current?.mute();
      }
    });
  }, []);

  return (
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
          width="840"
          height="480"
          autoPlay
          loop={true}
          src="video6017285680328085846_q127ir"
          logo={{
            imageUrl: getCldImageUrl({
              src: "Logo_qpwruy",
            }),
            onClickUrl: "/contact-us",
          }}
        />
      </Box>
    </Box>
  );
};

export default IntroVideo;
