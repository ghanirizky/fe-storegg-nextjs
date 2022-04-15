import { VoucherTypes } from "../../../services/data-types";

interface CheckoutItemProps {
  voucher : VoucherTypes
}

const CheckoutItem = (props : CheckoutItemProps) => {

  const {voucher} = props

  return (
    <>
      <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
        <div className="pe-4">
          <div className="cropped">
            <img src={`${process.env.NEXT_PUBLIC_IMG}/${voucher?.thumbnail}`} className="img-fluid" alt="" />
          </div>
        </div>
        <div>
          <p className="fw-bold text-xl color-palette-1 mb-10">
            {voucher?.name}
          </p>
          <p className="color-palette-2 m-0">Category: {voucher?.category.name}</p>
        </div>
      </div>
    </>
  );
};

export default CheckoutItem;
