import { Box, Checkbox, Divider, Grid, Stack, Typography } from "@mui/material";
import ImageListItem from "../Components/ImageListItem";

function UserListing({ name, email, role, image, checked, handleCheckUser }) {
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
      onClick={() => handleCheckUser()}
    >
      <Box width={"40px"} minWidth={"40px"} sx={{ overflowY: "auto" }}>
        <Stack justifyContent={"center"} height={1}>
          <Checkbox
            checked={checked}
            size="small"
            color="rise"
            onClick={(e) => {
              e.stopPropagation();
              handleCheckUser();
            }}
          />
        </Stack>
      </Box>
      <Stack
        width={"200px"}
        minWidth={"200px"}
        sx={{ overflowY: "auto" }}
        justifyContent={"center"}
      >
        <Typography
          title={name}
          fontSize={"0.9rem"}
          p={"0.5rem"}
          noWrap
          fontWeight={"bold"}
        >
          {name}
        </Typography>
      </Stack>
      <Stack
        width={"300px"}
        minWidth={"300px"}
        sx={{ overflowY: "auto" }}
        justifyContent={"center"}
      >
        <Typography
          fontSize={"0.9rem"}
          p={"0.5rem"}
          sx={{ textWrap: "wrap" }}
          fontWeight={"bold"}
        >
          {email}
        </Typography>
      </Stack>
      <Stack width={"80px"} minWidth={"80px"} sx={{ overflowY: "auto" }}>
        <Grid container spacing={1} p={1}>
          <ImageListItem src={image} number={12} user />
        </Grid>
      </Stack>
      <Stack
        width={"100px"}
        minWidth={"100px"}
        sx={{ overflowY: "auto" }}
        justifyContent={"center"}
      >
        <Typography
          title={name}
          fontSize={"0.9rem"}
          p={"0.5rem"}
          noWrap
          fontWeight={"bold"}
        >
          {role == "admin" ? "Admin" : "User"}
        </Typography>
      </Stack>
      <Stack flex={1}></Stack>
    </Stack>
  );
}

export default UserListing;
