import { Box } from "@mui/material";
import { useState } from "react";
import { userStore } from "@/stores/userStore";

import MenuBar from "./Menubar";
import TopAddressBar from "./TopAddress";
import SlidingMenu from "../../components/slidingMenu";

function NavBar({ page, realEstates, articles }) {
  const { user } = userStore();
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
        <MenuBar
          realEstates={realEstates}
          articles={articles}
          user={user}
          type={page}
          handleOpenSlidingMenu={handleOpenSlidingMenu}
        />
      </Box>
      <SlidingMenu
        realEstates={realEstates}
        articles={articles}
        open={openSlidingMenu}
        handleClose={handleCloseSlidingMenu}
      />
    </>
  );
}

export default NavBar;
