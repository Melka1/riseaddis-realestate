import { Circle, ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import TextListItem from "../Components/TextListItem";
import ImageListItem from "../Components/ImageListItem";
import { useState } from "react";
import { getCurrency } from "@/data/currency";

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

function RealEstateListing({
  name,
  description,
  previousProjects,
  activeProjects,
  sisterCompanies,
  images,
  currency,
  status,
  checked,
  handleCheckRealEstate,
}) {
  const [expand, setExpand] = useState(false);
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
        "&:hover .chevron": { display: "inline-flex" },
      }}
      onClick={() => handleCheckRealEstate()}
    >
      <Box
        width={"40px"}
        minWidth={"40px"}
        maxHeight={expand ? "unset" : "200px"}
        sx={{ overflowY: "auto" }}
      >
        <Stack justifyContent={"center"} height={1}>
          <Checkbox
            checked={checked}
            size="small"
            color="rise"
            onClick={(e) => {
              e.stopPropagation();
              handleCheckRealEstate();
            }}
          />
        </Stack>
      </Box>
      <Box
        width={"200px"}
        minWidth={"200px"}
        maxHeight={expand ? "unset" : "200px"}
        sx={{ overflowY: "auto" }}
      >
        <Typography title={name} fontSize={"0.8rem"} p={"0.5rem"} noWrap>
          {name}
        </Typography>
      </Box>
      <Box
        width={"300px"}
        minWidth={"300px"}
        maxHeight={expand ? "unset" : "200px"}
        sx={{ overflowY: "auto" }}
      >
        <Typography fontSize={"0.8rem"} p={"0.5rem"} sx={{ textWrap: "wrap" }}>
          {description || "-"}
        </Typography>
      </Box>
      <Box
        width={"200px"}
        minWidth={"200px"}
        maxHeight={expand ? "unset" : "200px"}
        sx={{ overflowY: "auto" }}
      >
        <Stack gap={"0.5rem"} p={"0.5rem"}>
          {previousProjects?.length
            ? previousProjects?.map((site, index) => (
                <TextListItem key={index} name={site} />
              ))
            : "[]"}
        </Stack>
      </Box>
      <Box
        width={"200px"}
        minWidth={"200px"}
        maxHeight={expand ? "unset" : "200px"}
        sx={{ overflowY: "auto" }}
      >
        <Stack gap={"0.5rem"} p={"0.5rem"}>
          {activeProjects?.length
            ? activeProjects?.map((site, index) => (
                <TextListItem key={index} name={site} />
              ))
            : "[]"}
        </Stack>
      </Box>
      <Box
        width={"250px"}
        minWidth={"250px"}
        maxHeight={expand ? "unset" : "200px"}
        sx={{ overflowY: "auto" }}
      >
        <Stack gap={"0.5rem"} p={"0.5rem"}>
          {sisterCompanies?.length
            ? sisterCompanies?.map((name, index) => (
                <TextListItem key={index} name={name} />
              ))
            : "[]"}
        </Stack>
      </Box>
      <Box
        width={"200px"}
        minWidth={"200px"}
        maxHeight={expand ? "unset" : "200px"}
        sx={{ overflowY: "auto" }}
      >
        <Grid container spacing={1} p={1}>
          {images?.map((image, index) => (
            <ImageListItem key={index} src={image} />
          ))}
        </Grid>
      </Box>
      <Box
        width={"100px"}
        minWidth={"100px"}
        maxHeight={expand ? "unset" : "200px"}
        sx={{ overflowY: "auto" }}
      >
        <Typography title={name} fontSize={"0.8rem"} p={"0.5rem"} noWrap>
          {getCurrency(currency).abbr}
        </Typography>
      </Box>
      <Box
        width={"100px"}
        minWidth={"100px"}
        maxHeight={expand ? "unset" : "200px"}
        sx={{ overflowY: "auto" }}
      >
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

      <IconButton
        className="chevron"
        onClick={() => setExpand((p) => !p)}
        sx={{
          display: "none",
          height: "30px",
          width: "30px",
          position: "absolute",
          top: "calc(50% - 15px)",
          right: "2rem",
        }}
      >
        {!expand ? <ExpandMore /> : <ExpandLess />}
      </IconButton>
    </Stack>
  );
}

export default RealEstateListing;
