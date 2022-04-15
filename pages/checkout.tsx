import Image from "next/image";
import CheckoutConfirmation from "../components/organisms/CheckoutConfirmation";
import CheckoutDetail from "../components/organisms/CheckoutDetail";
import CheckoutItem from "../components/organisms/CheckoutItem";
import jwtDecode from "jwt-decode";
import {
  JWTPayloadTypes,
  NominalTypes,
  PaymentTypes,
  PlayerTypes,
  VoucherTypes,
  BankTypes,
  CheckOutPayloadTypes,
} from "../services/data-types";
import { useEffect, useState } from "react";

interface CheckoutPaymentTypes {
  bank: BankTypes;
  payment: PaymentTypes;
}

interface CheckOutLocalTypes {
  bankAccountName: string;
  verifiedId: string;
  nominalItem: NominalTypes;
  paymentItem: CheckoutPaymentTypes;
  voucher: VoucherTypes;
}

interface CheckoutProps {
  user: PlayerTypes;
}

const CheckoutPage = (props: CheckoutProps) => {
  const { user } = props; //Di dapat dari getServerSideProps Note: berbeda dengan Auth yang client side\
  const [voucher, setVoucher] = useState<VoucherTypes>();
  const [nominal, setNominal] = useState<NominalTypes>();
  const [payment, setPayment] = useState<CheckoutPaymentTypes>();
  const [bankAccName, setBankAccName] = useState("");
  const [accName, setAccName] = useState("");
  const [checkoutPayload, setCheckoutPayload] =
    useState<CheckOutPayloadTypes>();

  useEffect(() => {
    const dataTopup: CheckOutLocalTypes = JSON.parse(
      localStorage.getItem("data-topup")!
    );
    setVoucher(dataTopup.voucher);
    setNominal(dataTopup.nominalItem);
    setPayment(dataTopup.paymentItem);
    setBankAccName(dataTopup.bankAccountName);
    setAccName(dataTopup.verifiedId);
    const payload: CheckOutPayloadTypes = {
      voucher: dataTopup.voucher._id,
      nominal: dataTopup.nominalItem._id,
      payment: dataTopup.paymentItem.payment._id,
      bank: dataTopup.paymentItem.bank._id,
      name: dataTopup.bankAccountName,
      accountUser: dataTopup.verifiedId,
    };
    setCheckoutPayload(payload);
  }, []);
  return (
    <>
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <div className="logo text-md-center text-start pb-50">
            <a className="" href="/">
              <Image src="/icon/logo.svg" width={60} height={60} />
            </a>
          </div>

          <div className="title-text pt-md-50 pt-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">
              Waktunya meningkatkan cara bermain
            </p>
          </div>

          <CheckoutItem voucher={voucher!} />

          <hr />
          <CheckoutDetail
            nominalItem={nominal!}
            paymentItem={payment!}
            accountId={accName}
            bankAccName={bankAccName}
          />
          <CheckoutConfirmation payload={checkoutPayload!} />
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export const getServerSideProps = ({ req }: GetServerSideProps) => {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken: string = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const user: PlayerTypes = payload.player;
  return {
    props: {
      user,
    },
  };
};
