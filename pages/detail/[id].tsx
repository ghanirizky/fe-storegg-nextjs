import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import TopUpForm from "../../components/organisms/TopUpForm";
import TopUpItem from "../../components/organisms/TopUpItem";
import {
  GameItemTypes,
  NominalTypes,
  PaymentTypes,
  VoucherTypes,
} from "../../services/data-types";
import { getFeaturedGame, getVoucherDetail } from "../../services/player";

interface TopUpFormProps {
  nominals: NominalTypes[];
  payments: PaymentTypes[];
  voucher: VoucherTypes | undefined;
}

const DetailPage = ({ voucher, nominals, payments }: TopUpFormProps) => {
  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem type="mobile" data={voucher} />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem type="desktop" data={voucher} />
              <hr />
              <TopUpForm
                nominals={nominals}
                payments={payments}
                voucher={voucher}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailPage;

export async function getStaticPaths() {
  const data = await getFeaturedGame() 
  const vouchers = data.data as VoucherTypes[]

  let paths : any = []

  if(vouchers){
    paths = vouchers.map((item: GameItemTypes) => {
      return {
        params: {
          id: item._id,
        },
      };
    });
  }

  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}

export async function getStaticProps({ params }: GetStaticProps) {
  const { id } = params;
  const result = await getVoucherDetail(id);
  return {
    props: {
      voucher: result.data.voucher,
      nominals: result.data.voucher?.nominals,
      payments: result.data.payment,
    },
  };
}
