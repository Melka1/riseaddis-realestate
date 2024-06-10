import { useDashboardStore } from "@/stores/dashboardStore";
import { Update } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { GiTrashCan } from "react-icons/gi";
import UnitListingHeader from "./UnitListingHeader";
import UnitListing from "./UnitListing";
import handleDeleteUnit from "./utils/handleDeleteUnit";

function UnitListPreviewComponent({ setAddUnit, setLoading, setSnackBar }) {
  const unitRef = useRef(null);
  const headerRef = useRef(null);

  const [deleteState, setDeleteState] = useState(true);
  const [selectedUnits, setSelectedUnits] = useState([]);

  const { setUnits, units, updateUnits, setUnit } = useDashboardStore();

  const handleCheckUnit = (index) => {
    if (index == -1) {
      if (selectedUnits.length == units.length) {
        return setSelectedUnits([]);
      } else {
        return setSelectedUnits(units.map((unit) => unit.id));
      }
    }

    setSelectedUnits((prev) => {
      if (prev.includes(units[index].id)) {
        return prev.filter((id) => id !== units[index].id);
      }

      return [...prev, units[index].id];
    });
  };

  const handleScroll = () => {
    if (unitRef.current && headerRef.current) {
      const { scrollLeft } = unitRef.current;
      headerRef.current.scrollLeft = scrollLeft;
    }
  };

  useEffect(() => {
    if (selectedUnits.length > 0) {
      setDeleteState(false);
    } else {
      setDeleteState(true);
    }
  }, [selectedUnits]);
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
          Units
        </Typography>
        <Button
          variant="contained"
          color="riseLight"
          startIcon={<Update />}
          disabled={selectedUnits.length !== 1}
          onClick={() => {
            let unit = units.filter((u) => selectedUnits.includes(u.id))[0];
            setUnit(unit);
            setAddUnit(true);
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
            handleDeleteUnit({
              selectedUnits,
              setLoading,
              setUnits,
              units,
              updateUnits,
              setSelectedUnits,
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
          onClick={() => setAddUnit(true)}
          disabled={selectedUnits.length > 0}
        >
          Add
        </Button>
      </Stack>

      <Stack
        bgcolor={"background.lighter"}
        maxHeight={"100%"}
        overflow={"hidden"}
      >
        <UnitListingHeader
          handleCheckUnit={() => handleCheckUnit(-1)}
          headerRef={headerRef}
          checked={units.length == selectedUnits.length}
          handleScroll={handleScroll}
        />

        <Box
          id="unit-list"
          ref={unitRef}
          overflow={"scroll"}
          sx={{
            overflowY: "scroll",
            position: "relative",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          maxHeight={"100%"}
          pb={"2rem"}
          onScroll={handleScroll}
        >
          {units?.map((unit, index) => (
            <UnitListing
              key={index}
              checked={selectedUnits.includes(unit.id)}
              name={unit.name}
              realEstate={unit.site.realEstate.name}
              site={unit.site.name}
              bedroom={unit.bedroom}
              bathroom={unit.bathroom}
              balcony={unit.balcony}
              netArea={unit.netArea}
              commonArea={unit.commonArea}
              totalArea={unit.totalArea}
              total={unit.total}
              available={unit.available}
              price={unit.price}
              images={unit.images}
              status={unit.status}
              handleCheckUnit={() => handleCheckUnit(index)}
            />
          ))}
        </Box>
      </Stack>
    </>
  );
}

export default UnitListPreviewComponent;
