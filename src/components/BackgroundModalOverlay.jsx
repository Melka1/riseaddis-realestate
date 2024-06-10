import { useBackgroundStore } from "@/stores/modalStore";
import { Stack } from "@mui/material";

function BackgroundModalOverlay() {
  const { displayBackground, setDisplayBackground } = useBackgroundStore();
  return displayBackground ? (
    <Stack
      position={"absolute"}
      maxWidth={"100vw"}
      width={1}
      height={"100vh"}
      top={0}
      left={0}
      zIndex={1000}
      overflow={"hidden"}
      onClick={() => setDisplayBackground(false)}
    ></Stack>
  ) : (
    <></>
  );
}

export default BackgroundModalOverlay;
