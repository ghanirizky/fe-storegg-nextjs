import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { CheckOutPayloadTypes } from "../../../services/data-types";
import { checkout } from "../../../services/player";

const CheckoutConfirmation = (props: { payload: CheckOutPayloadTypes }) => {
  const [checkBox, setCheckBox] = useState(false);
  const router = useRouter()

  const onSubmit = async () => {
    if (!checkBox)
      return toast.error("Pastikan anda telah melakukan pembayaran");
    const { payload } = props;

    if (payload) {
      const result = await checkout(payload);
      if (result.error) return toast.error(result.message);
      toast.success("Checkout Success !");
      router.push('/complete-checkout')
      return;
    }

    return;
  };

  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input
          type="checkbox"
          checked={checkBox}
          onChange={() => setCheckBox(!checkBox)}
        />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          type="button"
          onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
};

export default CheckoutConfirmation;
