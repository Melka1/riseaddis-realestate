import { Box, Checkbox, Divider, Stack, Typography } from "@mui/material";

function UserListingHeader({
  handleCheckUser,
  headerRef,
  checked,
  handleScroll,
}) {
  return (
    <Stack
      direction={"row"}
      divider={<Divider flexItem orientation="vertical" />}
      borderBottom={"3px solid"}
      flexShrink={0}
      borderColor="riseLight.dark"
      ref={headerRef}
      onScroll={() => handleScroll()}
      sx={{
        overflowY: "scroll",
        position: "relative",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box minWidth={"40px"} width={"40px"}>
        <Stack justifyContent={"center"} height={1}>
          <Checkbox
            size="small"
            color="rise"
            checked={checked}
            onClick={() => handleCheckUser()}
          />
        </Stack>
      </Box>
      <Box minWidth={"200px"} width={"200px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Name
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"300px"} width={"300px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Email
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"80px"} width={"80px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Image
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Role
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}

export default UserListingHeader;
