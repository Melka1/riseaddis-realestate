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

function UnitListing({
  name,
  realEstate,
  site,
  bedroom,
  bathroom,
  balcony,
  netArea,
  commonArea,
  totalArea,
  available,
  total,
  price,
  images,
  status,
  checked,
  handleCheckUnit,
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
        <Stack justifyContent={"center"} height={1}>
          <Checkbox
            checked={checked}
            size="small"
            color="rise"
            onClick={() => handleCheckUnit()}
          />
        </Stack>
      </Box>
      <Box minWidth={"75px"} width={"75px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            {name}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"200px"} width={"200px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            {realEstate}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"150px"} width={"150px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            {site}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            {bedroom || "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            {bathroom || "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            {balcony == null ? "-" : balcony ? "Yes" : "No"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            {netArea ? netArea + " sqm" : "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"150px"} width={"150px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            {commonArea ? commonArea + " sqm" : "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            {totalArea ? totalArea + " sqm" : "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            {total || "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"150px"} width={"150px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            {available || "-"}
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"150px"} width={"150px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            {price || "-"}
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

export default UnitListing;
