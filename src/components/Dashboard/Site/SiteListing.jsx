import { Circle } from "@mui/icons-material";
import { Box, Checkbox, Divider, Grid, Stack, Typography } from "@mui/material";
import ImageListItem from "../Components/ImageListItem";

const statuses = [
  {
    name: "Active",
    value: "active",
    color: "success",
  },
  {
    name: "Inactive",
    value: "inactive",
    color: "error",
  },
  {
    name: "Draft",
    value: "draft",
    color: "secondary",
  },
];

function SiteListing({
  name,
  realEstate,
  description,
  location,
  footPrintArea,
  builtUpArea,
  floors,
  basementCount,
  parkingLots,
  studios,
  oneBedrooms,
  twoBedrooms,
  threeBedrooms,
  buildingType,
  apartmentSizes,
  images,
  price,
  stage,
  deliveryTime,
  status,
  checked,
  handleCheckSite,
}) {
  return (
    <Stack
      position={"relative"}
      width={"fit-content"}
      direction={"row"}
      divider={<Divider flexItem orientation="vertical" />}
      borderBottom={"1px solid"}
      borderColor="riseLight.dark"
      color={"rise.dark"}
      sx={{
        "&:hover": { bgcolor: "riseLight.light" },
        cursor: "pointer",
        "&:hover .chevron": { display: "block" },
      }}
    >
      <Box width={"40px"} minWidth={"40px"}>
        <Stack justifyContent={"flex-start"} height={1}>
          <Checkbox
            checked={checked}
            size="small"
            color="rise"
            onClick={() => handleCheckSite()}
          />
        </Stack>
      </Box>
      <Box minWidth={"150px"} width={"150px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography
            fontSize={"0.9rem"}
            fontWeight="normal"
            p={"0.5rem"}
            noWrap
          >
            {name}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"200px"} width={"200px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography
            fontSize={"0.9rem"}
            fontWeight="normal"
            p={"0.5rem"}
            noWrap
          >
            {realEstate}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"300px"} width={"300px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography fontSize={"0.9rem"} fontWeight="normal" p={"0.5rem"}>
            {description || "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"150px"} width={"150px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography
            fontSize={"0.9rem"}
            fontWeight="normal"
            p={"0.5rem"}
            // noWrap
          >
            {location || "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography
            fontSize={"0.9rem"}
            fontWeight="normal"
            p={"0.5rem"}
            noWrap
          >
            {footPrintArea ? footPrintArea + " sqm" : "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography
            fontSize={"0.9rem"}
            fontWeight="normal"
            p={"0.5rem"}
            noWrap
          >
            {builtUpArea ? builtUpArea + " sqm" : "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"75px"} width={"75px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography
            fontSize={"0.9rem"}
            fontWeight="normal"
            p={"0.5rem"}
            noWrap
          >
            {floors || "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography
            fontSize={"0.9rem"}
            fontWeight="normal"
            p={"0.5rem"}
            noWrap
          >
            {basementCount || "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"150px"} width={"150px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography
            fontSize={"0.9rem"}
            fontWeight="normal"
            p={"0.5rem"}
            noWrap
          >
            {parkingLots || "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography
            fontSize={"0.9rem"}
            fontWeight="normal"
            p={"0.5rem"}
            noWrap
          >
            {studios || "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography
            fontSize={"0.9rem"}
            fontWeight="normal"
            p={"0.5rem"}
            noWrap
          >
            {oneBedrooms || "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography
            fontSize={"0.9rem"}
            fontWeight="normal"
            p={"0.5rem"}
            noWrap
          >
            {twoBedrooms || "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography
            fontSize={"0.9rem"}
            fontWeight="normal"
            p={"0.5rem"}
            noWrap
          >
            {threeBedrooms || "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"150px"} width={"150px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography
            fontSize={"0.9rem"}
            fontWeight="normal"
            p={"0.5rem"}
            noWrap
          >
            {buildingType || "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"200px"} width={"200px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography
            fontSize={"0.9rem"}
            fontWeight="normal"
            p={"0.5rem"}
            noWrap
          >
            {apartmentSizes || "-"}
          </Typography>
        </Stack>
      </Box>
      <Box width={"200px"} minWidth={"200px"}>
        <Grid container spacing={1} p={1}>
          {images?.map((image, index) => (
            <ImageListItem key={index} src={image} />
          ))}
        </Grid>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography
            fontSize={"0.9rem"}
            fontWeight="normal"
            p={"0.5rem"}
            noWrap
          >
            {price || "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"125px"} width={"125px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography
            fontSize={"0.9rem"}
            fontWeight="normal"
            p={"0.5rem"}
            // noWrap
          >
            {stage || "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"150px"} width={"150px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography fontSize={"0.9rem"} fontWeight="normal" p={"0.5rem"}>
            {deliveryTime || "-"}
          </Typography>
        </Stack>
      </Box>
      <Box width={"100px"} minWidth={"100px"}>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography fontSize={"0.8rem"} p={"0.5rem"} noWrap>
            {statuses[statuses.findIndex((s) => s.value == status)].name}
          </Typography>
          <Circle
            sx={{ width: 7, height: 7 }}
            color={statuses[statuses.findIndex((s) => s.value == status)].color}
          />
        </Stack>
      </Box>
    </Stack>
  );
}

export default SiteListing;
