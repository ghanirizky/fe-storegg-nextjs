import React from "react";
import {
  BankTypes,
  NominalTypes,
  PaymentTypes,
} from "../../../services/data-types";
import NumberFormat from "react-number-format";
import FormatRupiah from "../../atoms/FormatRupiah";

interface CheckoutPaymentTypes {
  bank: BankTypes;
  payment: PaymentTypes;
}

interface CheckoutDetailProps {
  accountId: string;
  bankAccName: string;
  nominalItem: NominalTypes;
  paymentItem: CheckoutPaymentTypes;
}

const CheckoutDetail = (props: CheckoutDetailProps) => {
  const { nominalItem, paymentItem, accountId, bankAccName } = props;
  const tax = nominalItem?.price * 0.1;

  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Game ID{" "}
          <span className="purchase-details">{accountId ?? "-"}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Order ID <span className="purchase-details">#GG001</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Item{" "}
          <span className="purchase-details">{`${nominalItem?.coinQuantity} ${nominalItem?.coinName}`}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Price{" "}
          <span className="purchase-details">
            <FormatRupiah nominal={nominalItem?.price} />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tax (10%){" "}
          <span className="purchase-details">
            <FormatRupiah nominal={nominalItem?.price} />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total{" "}
          <span className="purchase-details color-palette-4">
            <FormatRupiah nominal={nominalItem?.price + tax} />
          </span>
        </p>
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Informations
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Account Name{" "}
          <span className="purchase-details">{bankAccName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Type{" "}
          <span className="payment-details">{paymentItem?.payment.type}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name{" "}
          <span className="payment-details">{paymentItem?.bank.bankName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name{" "}
          <span className="payment-details">{paymentItem?.bank.name}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number{" "}
          <span className="payment-details">
            {paymentItem?.bank.noRekening}
          </span>
        </p>
      </div>
    </>
  );
};

export default CheckoutDetail;
