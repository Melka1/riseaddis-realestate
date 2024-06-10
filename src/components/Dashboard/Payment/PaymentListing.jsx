import { ExpandLess, ExpandMore } from "@mui/icons-material";
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
import { Fragment, useState } from "react";

function PaymentListing({
  name,
  sites,
  paymentList,
  checked,
  handleCheckPayment,
}) {
  const [expand, setExpand] = useState(false);
  return (
    <Stack
      position={"relative"}
      width={"100%"}
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
    >
      <Box
        width={"40px"}
        minWidth={"40px"}
        maxHeight={expand ? "unset" : "3rem"}
        sx={{
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Stack justifyContent={"flex-start"} height={1}>
          <Checkbox
            checked={checked}
            size="small"
            color="rise"
            onClick={() => handleCheckPayment()}
          />
        </Stack>
      </Box>
      <Box
        width={"200px"}
        minWidth={"200px"}
        maxHeight={expand ? "unset" : "3rem"}
        sx={{ overflowY: "auto" }}
      >
        <Typography title={name} fontSize={"0.8rem"} p={"0.5rem"} noWrap>
          {name}
        </Typography>
      </Box>

      <Box
        width={"300px"}
        minWidth={"300px"}
        maxHeight={expand ? "unset" : "3rem"}
        sx={{ overflowY: "auto" }}
      >
        <Stack gap={"0.5rem"} p={"0.5rem"}>
          {sites?.length
            ? sites?.map((site, index) => (
                <TextListItem key={index} name={site.name} />
              ))
            : "[]"}
        </Stack>
      </Box>

      <Box
        width={"100%"}
        minWidth={"500px"}
        maxHeight={expand ? "unset" : "3rem"}
        sx={{ overflowY: "auto" }}
      >
        <Stack gap={"0.5rem"} p={"0.5rem"}>
          <Grid container spacing={2}>
            {paymentList?.length
              ? paymentList?.map((list, index) => (
                  <Fragment key={index}>
                    <Grid item xs={8}>
                      <TextListItem key={index} name={list.name} />
                    </Grid>
                    <Grid item xs={4}>
                      <TextListItem key={index} name={list.value} />
                    </Grid>
                  </Fragment>
                ))
              : "[]"}
          </Grid>
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

export default PaymentListing;
