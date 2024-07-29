import { useEffect, useRef, useState } from "react";
import { useDashboardStore } from "@/stores/dashboardStore";
import { Update } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
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

  const {
    setUnits,
    units,
    updateUnits,
    setUnit,
    siteListOptions,
    realEstateListOptions,
    setChosenSiteFilter,
    setChosenRealEstateFilter,
    chosenSiteFilter,
    chosenRealEstateFilter,
  } = useDashboardStore();

  const handleCheckUnit = (unitId) => {
    if (unitId == null) {
      if (selectedUnits.length == units.length) {
        return setSelectedUnits([]);
      } else {
        return setSelectedUnits(units.map((unit) => unit.id));
      }
    }

    setSelectedUnits((prev) => {
      if (prev.includes(unitId)) {
        return prev.filter((id) => id !== unitId);
      }

      return [...prev, unitId];
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
        <FormControl size="small" sx={{ maxWidth: "200px", width: "100%" }}>
          <InputLabel id="realestate-filter-select-label">
            Filter By Realestate
          </InputLabel>
          <Select
            size="small"
            labelId="realestate-filter-select-label"
            id="realestate-filter-select"
            value={chosenRealEstateFilter}
            label="Filter By Realestate"
            onChange={({ target }) => {
              setChosenRealEstateFilter(target.value);
              setChosenSiteFilter(null);
            }}
          >
            <MenuItem value={null}>Show All</MenuItem>
            {realEstateListOptions.map((realEstate) => (
              <MenuItem key={realEstate.id} value={realEstate.id}>
                {realEstate.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ maxWidth: "200px", width: "100%" }}>
          <InputLabel id="site-filter-select-label">Filter By Site</InputLabel>
          <Select
            size="small"
            labelId="site-filter-select-label"
            id="site-filter-select"
            value={chosenSiteFilter}
            label="Filter By Site"
            onChange={({ target }) => setChosenSiteFilter(target.value)}
          >
            <MenuItem value={null}>Show All</MenuItem>
            {siteListOptions
              .filter((site) =>
                chosenRealEstateFilter
                  ? site.realEstate.id == chosenRealEstateFilter
                  : true
              )
              .map((site) => (
                <MenuItem key={site.id} value={site.id}>
                  {site.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
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
          handleCheckUnit={() => handleCheckUnit(null)}
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
          {units
            .filter((unit) =>
              chosenRealEstateFilter
                ? unit.site.realEstate.id == chosenRealEstateFilter
                : true
            )
            .filter((unit) =>
              chosenSiteFilter ? unit.site.id == chosenSiteFilter : true
            )
            ?.map((unit, index) => (
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
                handleCheckUnit={() => handleCheckUnit(unit.id)}
              />
            ))}
        </Box>
      </Stack>
    </>
  );
}

export default UnitListPreviewComponent;
