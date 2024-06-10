import { Box, Button, Stack, Typography } from "@mui/material";
import RealEstateListing from "./RealestateListing";
import { BiPlus } from "react-icons/bi";
import { GiTrashCan } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import handleDeleteRealEstate from "./utils/handleDeleteRealEstate";
import { useDashboardStore } from "@/stores/dashboardStore";
import { Update } from "@mui/icons-material";
import RealEstateListingHeader from "./RealEstateListingHeader";

function RealEstateListPreviewComponent({
  setAddRealEstate,
  setLoading,
  setSnackBar,
}) {
  const realRef = useRef(null);
  const headerRef = useRef(null);

  const [deleteState, setDeleteState] = useState(true);
  const [selectedRealEstates, setSelectedRealEstates] = useState([]);

  const { setRealEstates, realEstates, updateRealEstates, setRealEstate } =
    useDashboardStore();

  const handleCheckRealEstate = (index) => {
    if (index == -1) {
      if (selectedRealEstates.length == realEstates.length) {
        return setSelectedRealEstates([]);
      } else {
        return setSelectedRealEstates(
          realEstates.map((realEstate) => realEstate.id)
        );
      }
    }

    setSelectedRealEstates((prev) => {
      if (prev.includes(realEstates[index].id)) {
        return prev.filter((id) => id !== realEstates[index].id);
      }

      return [...prev, realEstates[index].id];
    });
  };

  const handleScroll = () => {
    if (realRef.current && headerRef.current) {
      const { scrollLeft } = realRef.current;
      headerRef.current.scrollLeft = scrollLeft;
    }
  };

  useEffect(() => {
    if (selectedRealEstates.length > 0) {
      setDeleteState(false);
    } else {
      setDeleteState(true);
    }
  }, [selectedRealEstates]);

  return (
    <>
      <Stack direction={"row"} gap={2}>
        <Typography
          fontSize={"2rem"}
          fontWeight={"bold"}
          color={"text.primary"}
          lineHeight={1}
          flex={1}
        >
          Real Estates
        </Typography>
        <Button
          variant="contained"
          color="riseLight"
          startIcon={<Update />}
          disabled={selectedRealEstates.length !== 1}
          onClick={() => {
            let realEstate = realEstates.filter((rs) =>
              selectedRealEstates.includes(rs.id)
            )[0];
            setRealEstate(realEstate);
            setAddRealEstate(true);
          }}
        >
          Update
        </Button>
        <Button
          variant="contained"
          color="riseLight"
          startIcon={<GiTrashCan />}
          disabled={deleteState}
          onClick={() =>
            handleDeleteRealEstate({
              selectedRealEstates,
              setLoading,
              setRealEstates,
              realEstates,
              updateRealEstates,
              setSelectedRealEstates,
              setSnackBar,
            })
          }
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="riseLight"
          startIcon={<BiPlus />}
          onClick={() => setAddRealEstate(true)}
          disabled={selectedRealEstates.length > 0}
        >
          Add
        </Button>
      </Stack>

      <Stack
        bgcolor={"background.lighter"}
        maxHeight={"100%"}
        overflow={"hidden"}
      >
        <RealEstateListingHeader
          handleCheckRealEstate={() => handleCheckRealEstate(-1)}
          headerRef={headerRef}
          checked={realEstates.length == selectedRealEstates.length}
          handleScroll={handleScroll}
        />

        <Box
          id="realestate-list"
          ref={realRef}
          overflow={"scroll"}
          maxHeight={"100%"}
          pb={"2rem"}
          onScroll={handleScroll}
          sx={{
            overflowY: "scroll",
            position: "relative",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {realEstates?.map((realEstate, index) => (
            <RealEstateListing
              key={index}
              checked={selectedRealEstates.includes(realEstate.id)}
              name={realEstate.name}
              description={realEstate.background}
              previousProjects={realEstate.previousProjects}
              activeProjects={realEstate.activeProjects}
              sisterCompanies={realEstate.sisterCompanies}
              images={realEstate.images}
              status={realEstate.status}
              handleCheckRealEstate={() => handleCheckRealEstate(index)}
            />
          ))}
        </Box>
      </Stack>
    </>
  );
}

export default RealEstateListPreviewComponent;
