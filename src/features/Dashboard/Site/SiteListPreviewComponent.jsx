import { useDashboardStore } from "@/stores/dashboardStore";
import { Update } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { GiTrashCan } from "react-icons/gi";
import SiteListingHeader from "./SiteListingHeader";
import SiteListing from "./SiteListing";
import handleDeleteSite from "./utils/handleDeleteSite";
import { getCurrency } from "@/data/currency";

function SiteListPreviewComponent({ setAddSite, setLoading, setSnackBar }) {
  const siteRef = useRef(null);
  const headerRef = useRef(null);

  const [deleteState, setDeleteState] = useState(true);
  const [selectedSites, setSelectedSites] = useState([]);

  const { setSites, sites, updateSites, setSite } = useDashboardStore();

  const handleCheckSite = (index) => {
    if (index == -1) {
      if (selectedSites.length == sites.length) {
        return setSelectedSites([]);
      } else {
        return setSelectedSites(sites.map((site) => site.id));
      }
    }

    setSelectedSites((prev) => {
      if (prev.includes(sites[index].id)) {
        return prev.filter((id) => id !== sites[index].id);
      }

      return [...prev, sites[index].id];
    });
  };

  const handleScroll = () => {
    if (siteRef.current && headerRef.current) {
      const { scrollLeft } = siteRef.current;
      headerRef.current.scrollLeft = scrollLeft;
    }
  };

  useEffect(() => {
    if (selectedSites.length > 0) {
      setDeleteState(false);
    } else {
      setDeleteState(true);
    }
  }, [selectedSites]);
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
          Sites
        </Typography>
        <Button
          variant="contained"
          color="riseLight"
          startIcon={<Update />}
          disabled={selectedSites.length !== 1}
          onClick={() => {
            let site = sites.filter((u) => selectedSites.includes(u.id))[0];
            setSite(site);
            setAddSite(true);
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
            handleDeleteSite({
              token,
              selectedSites,
              setLoading,
              setSites,
              sites,
              updateSites,
              setSelectedSites,
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
          onClick={() => setAddSite(true)}
          disabled={selectedSites.length > 0}
        >
          Add
        </Button>
      </Stack>

      <Stack
        bgcolor={"background.lighter"}
        maxHeight={"100%"}
        overflow={"hidden"}
      >
        <SiteListingHeader
          handleCheckSite={() => handleCheckSite(-1)}
          headerRef={headerRef}
          checked={sites.length == selectedSites.length}
          handleScroll={handleScroll}
        />
        <Box
          id="site-list"
          ref={siteRef}
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
          {sites?.map((site, index) => (
            <SiteListing
              key={index}
              checked={selectedSites.includes(site.id)}
              name={site.name}
              realEstate={site.realEstate.name}
              description={site.description}
              location={site.location}
              footPrintArea={site.footPrintArea}
              builtUpArea={site.builtUpArea}
              floors={site.floors}
              basementCount={site.basementCount}
              parkingLots={site.parkingLots}
              studios={site.studios}
              oneBedrooms={site.oneBedrooms}
              twoBedrooms={site.twoBedrooms}
              threeBedrooms={site.threeBedrooms}
              buildingType={site.buildingType}
              apartmentSizes={site.apartmentSizes}
              images={site.images}
              price={site.price}
              stage={site.stage}
              deliveryTime={site.deliveryTime}
              featured={site.featured}
              status={site.status}
              currency={getCurrency(site.realEstate.currency)}
              handleCheckSite={() => handleCheckSite(index)}
            />
          ))}
        </Box>
      </Stack>
    </>
  );
}

export default SiteListPreviewComponent;
