import { Box, Checkbox, Divider, Stack, Typography } from "@mui/material";

function UnitListingHeader({
  handleCheckUnit,
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
            onClick={() => handleCheckUnit()}
          />
        </Stack>
      </Box>
      <Box minWidth={"120px"} width={"120px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Name
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"200px"} width={"200px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            RealEstate Name
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"150px"} width={"150px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Site Name
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Bedroom
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Bathroom
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Balcony
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Net Area
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"150px"} width={"150px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Common Area
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Total Area
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Total Units
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"150px"} width={"150px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Available Units
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"150px"} width={"150px"}>
        <Stack height={1} justifyContent={"center"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Price
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
            Status
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}

export default UnitListingHeader;
