import { Box, Button, Stack, Typography } from "@mui/material";
import { BiPlus } from "react-icons/bi";
import { GiTrashCan } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import { useDashboardStore } from "@/stores/dashboardStore";
import { Update } from "@mui/icons-material";
import PaymentListingHeader from "./PaymentListingHeader";
import handleDeletePayment from "./utils/handleDeletePayment";
import PaymentListing from "./PaymentListing";
import { useTokenStore } from "@/stores/tokenStore";

function PaymentListPreviewComponent({
  setAddPayment,
  setLoading,
  setSnackBar,
}) {
  const { token } = useTokenStore();

  const realRef = useRef(null);
  const headerRef = useRef(null);

  const [deleteState, setDeleteState] = useState(true);
  const [selectedPayments, setSelectedPayments] = useState([]);

  const { setPayments, payments, updatePayments, setPayment } =
    useDashboardStore();

  const handleCheckPayment = (index) => {
    if (index == -1) {
      if (selectedPayments.length == payments.length) {
        return setSelectedPayments([]);
      } else {
        return setSelectedPayments(payments.map((payment) => payment.id));
      }
    }

    setSelectedPayments((prev) => {
      if (prev.includes(payments[index].id)) {
        return prev.filter((id) => id !== payments[index].id);
      }

      return [...prev, payments[index].id];
    });
  };

  const handleScroll = () => {
    if (realRef.current && headerRef.current) {
      const { scrollLeft } = realRef.current;
      headerRef.current.scrollLeft = scrollLeft;
    }
  };

  useEffect(() => {
    if (selectedPayments.length > 0) {
      setDeleteState(false);
    } else {
      setDeleteState(true);
    }
  }, [selectedPayments]);

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
          Payments
        </Typography>
        <Button
          variant="contained"
          color="riseLight"
          startIcon={<Update />}
          disabled={selectedPayments.length !== 1}
          onClick={() => {
            let payment = payments.filter((rs) =>
              selectedPayments.includes(rs.id)
            )[0];
            setPayment(payment);
            setAddPayment(true);
          }}
        >
          Update
        </Button>
        <Button
          variant="contained"
          color="riseLight"
          startIcon={<GiTrashCan />}
          disabled={deleteState}
          onClick={() =>
            handleDeletePayment({
              token,
              selectedPayments,
              setLoading,
              setPayments,
              payments,
              updatePayments,
              setSelectedPayments,
              setSnackBar,
            })
          }
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="riseLight"
          startIcon={<BiPlus />}
          onClick={() => setAddPayment(true)}
          disabled={selectedPayments.length > 0}
        >
          Add
        </Button>
      </Stack>

      <Stack
        bgcolor={"background.lighter"}
        maxHeight={"100%"}
        overflow={"hidden"}
      >
        <PaymentListingHeader
          handleCheckPayment={() => handleCheckPayment(-1)}
          headerRef={headerRef}
          checked={payments.length == selectedPayments.length}
          handleScroll={handleScroll}
        />

        <Box
          id="realestate-list"
          ref={realRef}
          overflow={"scroll"}
          maxHeight={"100%"}
          pb={"2rem"}
          onScroll={handleScroll}
          sx={{
            overflowY: "scroll",
            position: "relative",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {payments?.map((payment, index) => (
            <PaymentListing
              key={index}
              checked={selectedPayments.includes(payment.id)}
              name={payment.paymentType.name}
              sites={payment.sites}
              paymentList={payment.list}
              handleCheckPayment={() => handleCheckPayment(index)}
            />
          ))}
        </Box>
      </Stack>
    </>
  );
}

export default PaymentListPreviewComponent;
