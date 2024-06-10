import { Box, Checkbox, Divider, Stack, Typography } from "@mui/material";

function SiteListingHeader({
  handleCheckSite,
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
        <Stack justifyContent={"flex-start"} height={1}>
          <Checkbox
            size="small"
            color="rise"
            checked={checked}
            onClick={() => handleCheckSite()}
          />
        </Stack>
      </Box>
      <Box minWidth={"150px"} width={"150px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Name
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"200px"} width={"200px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            RealEstate Name
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"300px"} width={"300px"}>
        <Stack height={1} justifyContent={"flex-starttart"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Description
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"150px"} width={"150px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Location
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"}>
            Footprint Area
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"}>
            Built-up Area
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"75px"} width={"75px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Floors
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"}>
            Basement count
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"150px"} width={"150px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Parking lots
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography
            fontSize={"0.9rem"}
            fontWeight="bold"
            p={"0.5rem"}
            textAlign={"center"}
          >
            Studios
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"}>
            One Bedrooms
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"}>
            Two Bedrooms
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"}>
            Three Bedrooms
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"150px"} width={"150px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Building Type
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"200px"} width={"200px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Apartment sizes
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"200px"} width={"200px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Images
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Price
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"125px"} width={"125px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Stage
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"150px"} width={"150px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"}>
            Delivery time
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"100px"} width={"100px"}>
        <Stack height={1} justifyContent={"flex-start"}>
          <Typography fontSize={"0.9rem"} fontWeight="bold" p={"0.5rem"} noWrap>
            Status
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}

export default SiteListingHeader;
