import Image from "next/image";
import CheckoutConfirmation from "../components/organisms/CheckoutConfirmation";
import CheckoutDetail from "../components/organisms/CheckoutDetail";
import CheckoutItem from "../components/organisms/CheckoutItem";
import jwtDecode from "jwt-decode";
import { JWTPayloadTypes, PlayerTypes } from "../services/data-types";
import { AppProps } from "next/app";

interface CheckoutProps {
  user : PlayerTypes
}

const CheckoutPage = (props: CheckoutProps) => {
  const {user} = props //Di dapat dari getServerSideProps Note: berbeda dengan Auth yang client side
  return (
    <>
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <div className="logo text-md-center text-start pb-50">
            <a className="" href="#">
              <Image src="/icon/logo.svg" width={60} height={60} />
            </a>
          </div>

          <div className="title-text pt-md-50 pt-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">
              Waktunya meningkatkan cara bermain
            </p>
          </div>

          <CheckoutItem />

          <hr />
          <CheckoutDetail />
          <CheckoutConfirmation />
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;

export const getServerSideProps = ({ req } : any) => {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        pemanent: false,
      },
    };
  }

  const jwtToken: string = Buffer.from(token, 'base64').toString('ascii')
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const user : PlayerTypes = payload.player
  return {
    props: {
      user,
    },
  };
};
