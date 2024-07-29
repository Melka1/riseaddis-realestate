import { deepEqual } from "@/utils/checkEquality";

const hasPaymentValueChanged = ({
  payment,
  paymentType,
  paymentList,
  siteList,
}) => {
  if (
    deepEqual(payment?.paymentTypeId, paymentType) &&
    deepEqual(payment?.list, paymentList) &&
    deepEqual(payment?.siteIds, siteList)
  ) {
    return false;
  }

  return true;
};

export default hasPaymentValueChanged;
