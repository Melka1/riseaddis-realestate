import { Box } from "@mui/material";
import { useState } from "react";
import { useStore } from "@/stores/userStore";

import ResponsiveAppBar from "./Menubar";
import TopAddressBar from "./TopAddress";
import SlidingMenu from "../slidingMenu";

function NavBar({ page, realEstates }) {
  const { user } = useStore();
  const [openSlidingMenu, setOpenSlidingMenu] = useState(false);

  const handleCloseSlidingMenu = () => {
    setOpenSlidingMenu(false);
  };

  const handleOpenSlidingMenu = () => {
    setOpenSlidingMenu(true);
  };

  return (
    <>
      <Box position={"sticky"} top={0} left={0} zIndex={2000}>
        <TopAddressBar />
        <ResponsiveAppBar
          realEstates={realEstates}
          user={user}
          type={page}
          handleOpenSlidingMenu={handleOpenSlidingMenu}
        />
      </Box>
      <SlidingMenu
        realEstates={realEstates}
        open={openSlidingMenu}
        handleClose={handleCloseSlidingMenu}
      />
    </>
  );
}

export default NavBar;
