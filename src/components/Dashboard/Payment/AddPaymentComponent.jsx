import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { GiTrashCan } from "react-icons/gi";
import {
  Delete,
  Edit,
  ExpandLess,
  ExpandMore,
  Save,
} from "@mui/icons-material";
import { useDashboardStore } from "@/stores/dashboardStore";
import hasPaymentValueChanged from "./utils/hasPaymentValueChanged";
import handleAddPayment from "./utils/handleAddPayment";
import handleUpdatePayment from "./utils/handleUpdatePayment";

function AddPaymentComponent({ setAddPayment, setLoading, setSnackBar }) {
  const { updatePayments, payment, setPayment, sites, paymentTypes } =
    useDashboardStore();

  const [paymentType, setPaymentType] = useState(payment?.paymentTypeId || "");

  const [siteList, setSiteList] = useState(payment?.siteIds || []);

  const [paymentList, setPaymentList] = useState(payment?.list || []);

  const [addPaymentList, setAddPaymentList] = useState(false);

  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const handleSiteList = ({ target }) => {
    setSiteList((sl) => [...sl, target.value]);
  };

  const handleSiteFilter = (site) => {
    setSiteList((sl) => sl.filter((s) => s !== site));
  };

  const handlePaymentListFilter = (index) => {
    setPaymentList((pl) => pl.filter((p, ind) => ind !== index));
  };

  const handleAddPaymentList = () => {
    if (!addPaymentList) {
      setAddPaymentList(true);
      return;
    }

    if (!name || !value) {
      return;
    }

    setPaymentList((pl) => [...pl, { name, value }]);
    setName("");
    setValue("");
    setAddPaymentList(false);
  };

  const handlePaymentListOrder = (index, type) => {
    if (
      (type == "up" && index == 0) ||
      (type == "down" && index == paymentList.length - 1)
    ) {
      return;
    }
    setPaymentList((pl) => {
      const newList = [...pl];
      newList.splice(index, 1);
      newList.splice(type == "up" ? index - 1 : index + 1, 0, pl[index]);
      return newList;
    });
  };

  console.log(paymentTypes, payment);

  return (
    <>
      <Stack direction={"row"} gap={2}>
        <Typography
          fontSize={"2rem"}
          fontWeight={"bold"}
          color={"text.primary"}
          lineHeight={1}
          flex={1}
        >
          Add Payment
        </Typography>

        <Button
          variant="contained"
          color="riseLight"
          startIcon={<GiTrashCan />}
          onClick={() => {
            setPayment(null);
            setAddPayment(false);
          }}
        >
          Cancel
        </Button>

        {payment && (
          <Button
            variant="contained"
            color="riseLight"
            startIcon={<Edit />}
            disabled={
              !hasPaymentValueChanged({
                payment,
                paymentType,
                siteList,
                paymentList,
              })
            }
            onClick={() =>
              handleUpdatePayment({
                id: payment.id,
                paymentTypeId: paymentType,
                siteList,
                paymentList,

                setLoading,
                updatePayments,
                setSnackBar,
                setAddPayment,
                setPayment,
              })
            }
          >
            Update
          </Button>
        )}

        <Button
          variant="contained"
          color="riseLight"
          startIcon={<Save />}
          disabled={payment !== null}
          onClick={() =>
            handleAddPayment({
              paymentTypeId: paymentType,
              siteList,
              paymentList,

              setLoading,
              updatePayments,
              setSnackBar,
              setAddPayment,
              setPayment,
            })
          }
        >
          Save
        </Button>
      </Stack>

      <Stack flex={1} height={1} overflow={"hidden"}>
        <Grid container spacing={4} height={1}>
          <Grid item xs={4} height={1}>
            <Stack gap={2} pt={1.5} flex={1} sx={{ overflowY: "auto" }}>
              <Grid container spacing={2} height={1}>
                <Grid item xs={12}>
                  <FormControl size="small" fullWidth>
                    <InputLabel id="payment-type-select-label">
                      Payment Type
                    </InputLabel>
                    <Select
                      size="small"
                      labelId="payment-type-select-label"
                      id="payment-type-select"
                      value={paymentType}
                      label="Payment Type"
                      onChange={({ target }) => setPaymentType(target.value)}
                    >
                      {paymentTypes.map((pt) => (
                        <MenuItem key={pt.id} value={pt.id}>
                          {pt.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Stack border={"1px solid lightgray"} p={2} borderRadius={1}>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Stack justifyContent={"center"} height={1}>
                          <Typography
                            color={"gray"}
                            fontSize={"1.1rem"}
                            fontWeight={"bold"}
                          >
                            Sites it applies to
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth size="small">
                          <InputLabel id="demo-simple-select-label">
                            Sites
                          </InputLabel>
                          <Select
                            size="small"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={""}
                            label="Sites"
                            onChange={handleSiteList}
                          >
                            <MenuItem value="">Sites</MenuItem>
                            {sites?.map((site) => (
                              <MenuItem
                                disabled={siteList?.includes(site.id)}
                                key={site.id}
                                value={site.id}
                              >
                                {site.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <Box borderBottom={"1px solid gray"} />
                      </Grid>

                      {siteList?.length == 0 && (
                        <Grid item xs={12}>
                          <Stack>
                            <Typography>No Sites Selected</Typography>
                          </Stack>
                        </Grid>
                      )}

                      <Grid item xs={12}>
                        <Stack spacing={2}>
                          {siteList?.map((site) => {
                            console.log(sites, siteList);
                            let siteName = sites?.filter(
                              (s) => s.id === site
                            )[0]?.name;
                            return (
                              <Stack key={site}>
                                <Grid container spacing={1}>
                                  <Grid item xs>
                                    <Typography
                                      p={1}
                                      borderRadius={1}
                                      border="1px solid black"
                                    >
                                      {siteName}
                                    </Typography>
                                  </Grid>

                                  <Grid item xs={1.5}>
                                    <IconButton
                                      color="error"
                                      onClick={() => handleSiteFilter(site)}
                                    >
                                      <Delete />
                                    </IconButton>
                                  </Grid>
                                </Grid>
                              </Stack>
                            );
                          })}
                        </Stack>
                      </Grid>
                    </Grid>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Grid>

          <Grid item xs={8} height={1}>
            <Stack gap={2} height={1} overflow={"scroll"}>
              <Stack
                spacing={1}
                sx={{
                  display: "flex",
                  border: "1px solid gray",
                  borderRadius: "0.25rem",
                  p: "1rem",
                }}
              >
                <Typography color={"gray"}>Payment List</Typography>
                <Stack spacing={0.5}>
                  {paymentList?.map((payment, index) => (
                    <Stack key={index}>
                      <Grid container spacing={1}>
                        <Grid item xs={6.5}>
                          <Typography
                            p={1}
                            borderRadius={1}
                            border="1px solid black"
                          >
                            {payment.name}
                          </Typography>
                        </Grid>
                        <Grid item xs={2.5}>
                          <Typography
                            p={1}
                            borderRadius={1}
                            border="1px solid black"
                          >
                            {payment.value}
                          </Typography>
                        </Grid>
                        <Grid item xs={1} className="control">
                          <IconButton
                            disabled={index == 0}
                            color="rise"
                            onClick={() => handlePaymentListOrder(index, "up")}
                          >
                            <ExpandLess />
                          </IconButton>
                        </Grid>
                        <Grid item xs={1} className="control">
                          <IconButton
                            disabled={index == paymentList.length - 1}
                            color="rise"
                            onClick={() =>
                              handlePaymentListOrder(index, "down")
                            }
                          >
                            <ExpandMore />
                          </IconButton>
                        </Grid>

                        <Grid item xs={1} className="control">
                          <IconButton
                            color="error"
                            onClick={() => handlePaymentListFilter(index)}
                          >
                            <Delete />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Stack>
                  ))}
                </Stack>

                {addPaymentList && (
                  <Stack pt={4} width={"75%"}>
                    <Grid container spacing={2}>
                      <Grid item xs={8}>
                        <Stack>
                          <TextField
                            id="payment-list-name"
                            size="small"
                            label="Payment List Name"
                            variant="outlined"
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                          />
                        </Stack>
                      </Grid>
                      <Grid item xs={4}>
                        <Stack>
                          <TextField
                            id="payment-list-value"
                            size="small"
                            label="Payment List Value"
                            variant="outlined"
                            value={value}
                            onChange={({ target }) => setValue(target.value)}
                          />
                        </Stack>
                      </Grid>
                    </Grid>
                  </Stack>
                )}

                <Stack direction={"row"} gap={2} width={"75%"} pt={2}>
                  <Button
                    color="rise"
                    fullWidth
                    variant="contained"
                    onClick={() => handleAddPaymentList()}
                  >
                    Add
                  </Button>
                  <Button
                    color="error"
                    fullWidth
                    variant="contained"
                    onClick={() => {
                      setAddPaymentList(false);
                      setName("");
                      setValue("");
                    }}
                  >
                    Cancel
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default AddPaymentComponent;
