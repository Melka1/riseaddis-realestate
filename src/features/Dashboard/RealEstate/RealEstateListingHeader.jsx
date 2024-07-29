import { Box, Checkbox, Divider, Stack, Typography } from "@mui/material";

function RealEstateListingHeader({
  handleCheckRealEstate,
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
            onClick={() => handleCheckRealEstate()}
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
            Background
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"200px"} width={"200px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Previous Projects
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"200px"} width={"200px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Active Projects
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"250px"} width={"250px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Sister Companies
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"200px"} width={"200px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Images
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Currency
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Status
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}

export default RealEstateListingHeader;
