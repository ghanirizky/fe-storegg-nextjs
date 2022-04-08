import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import TopUpForm from "../../components/organisms/TopUpForm";
import TopUpItem from "../../components/organisms/TopUpItem";
import { VoucherTypes } from "../../services/data-types";
import { getVoucherDetail } from "../../services/player";

const DetailPage = () => {
  const { query, isReady } = useRouter();
  const [voucher, setVoucher] = useState<VoucherTypes>()
  const [nominals, setNominals] = useState([])
  const [payments, setPayments] = useState([])

  const getVoucherDetailAPI = useCallback(async (id: any) => {
    const data = await getVoucherDetail(id);
    setVoucher(data.voucher)
    localStorage.setItem('data-item', JSON.stringify(data.voucher))
    setNominals(data.voucher?.nominals)
    setPayments(data.payment)
  }, []);

  useEffect(() => {
    if (isReady) getVoucherDetailAPI(query.id);
  }, [isReady]);

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
              <TopUpItem type="mobile" data = {voucher} />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem type="desktop" data = {voucher} />
              <hr />
              <TopUpForm nominals = {nominals} payments = {payments} voucher ={voucher}/>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailPage;
