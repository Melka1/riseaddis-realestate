import { riseFont } from "@/pages/_app";
import { useDashboardStore } from "@/stores/dashboardStore";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";
import AddAmenityModal from "./AddAmenityModal";
import handleDeleteAmenity from "./utils/handleDeleteAmenity";
import { useTokenStore } from "@/stores/tokenStore";

function AmenityPreviewComponent({ setLoading, setSnackBar }) {
  const { siteAmenities, updateSiteAmenities } = useDashboardStore();
  const { token } = useTokenStore();

  const [open, setOpen] = useState(false);
  const [selectedSite, setSelectedSite] = useState(null);
  const [selectedAmenity, setSelectedAmenity] = useState(null);

  return (
    <Stack height={1}>
      <Typography
        className={riseFont.className}
        fontSize={"1.7rem"}
        component={"header"}
      >
        Amenities
      </Typography>
      <Stack
        spacing={4}
        py={4}
        sx={{ overflowY: "scroll", overflowX: "hidden" }}
        divider={<Divider flexItem sx={{ borderColor: "darkgray" }} />}
      >
        {siteAmenities?.map((siteAmenity, index) => (
          <Stack key={index} spacing={2}>
            <Stack
              direction={"row"}
              divider={<Divider flexItem orientation="vertical" />}
              spacing={2}
            >
              <Typography
                className={riseFont.className}
                fontSize={"1.2rem"}
                fontWeight={500}
              >
                Realestate: {siteAmenity.realEstate.name}
              </Typography>

              <Typography
                className={riseFont.className}
                fontSize={"1.2rem"}
                fontWeight={500}
              >
                Site: {siteAmenity.name}
              </Typography>
              {siteAmenity.id == selectedSite && (
                <>
                  <Button
                    onClick={() => {
                      setSelectedSite({
                        id: siteAmenity.id,
                        realEstate: siteAmenity.realEstate.name,
                        site: siteAmenity.name,
                      });
                      setOpen(true);
                    }}
                    variant="contained"
                  >
                    Update
                  </Button>
                  <Button
                    color="error"
                    onClick={() => {
                      handleDeleteAmenity({
                        amenityId: selectedAmenity.id,
                        token,
                        setLoading,
                        setSnackBar,
                        updateSiteAmenities,
                        setSelectedAmenity,
                        setSelectedSite,
                      });
                    }}
                    variant="contained"
                  >
                    Delete
                  </Button>
                  <Button
                    color="rise"
                    onClick={() => {
                      setSelectedAmenity(null);
                      setSelectedSite(null);
                    }}
                    variant="contained"
                  >
                    Cancel
                  </Button>
                </>
              )}
            </Stack>

            <Stack direction={"row"} spacing={2} overflow={"auto"} pr={4}>
              {siteAmenity.amenities.map((amenity, index) => (
                <Stack
                  key={index}
                  alignItems={"center"}
                  p={1}
                  border="1px solid"
                  borderColor={
                    selectedAmenity?.id == amenity.id ? "red" : "gray"
                  }
                  borderRadius={1}
                  spacing={1}
                  sx={{
                    cursor: "pointer",
                    "&:hover": { border: "1px solid blue" },
                  }}
                  onClick={() => {
                    setSelectedAmenity(amenity);
                    setSelectedSite(siteAmenity.id);
                  }}
                >
                  <Box
                    component={"img"}
                    width={50}
                    sx={{ aspectRatio: 1 }}
                    src={amenity.image.imageUrl}
                  />
                  <Typography
                    className={riseFont.className}
                    fontSize={"0.8rem"}
                    fontWeight={500}
                    textAlign={"center"}
                    noWrap
                  >
                    {amenity.name}
                  </Typography>
                </Stack>
              ))}
              <Stack
                height={1}
                alignItems={"center"}
                border={"1px solid gray"}
                borderRadius={1}
                spacing={1}
                justifyContent={"center"}
                minHeight={80}
              >
                <Button
                  color="riseLight"
                  sx={{ height: 1 }}
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    setSelectedSite({
                      id: siteAmenity.id,
                      realEstate: siteAmenity.realEstate.name,
                      site: siteAmenity.name,
                    });
                    setOpen(true);
                  }}
                >
                  <Typography noWrap fontSize={"0.8rem"}>
                    Add Amenity
                  </Typography>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>

      {open && (
        <AddAmenityModal
          open={open}
          setOpen={setOpen}
          selectedSite={selectedSite}
          setSelectedSite={setSelectedSite}
          setSelectedAmenity={setSelectedAmenity}
          setLoading={setLoading}
          setSnackBar={setSnackBar}
          amenity={selectedAmenity}
        />
      )}
    </Stack>
  );
}

export default AmenityPreviewComponent;
