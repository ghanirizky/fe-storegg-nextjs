import Image from "next/image";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpSuccess = () => {

  useEffect(() => {
    toast.success("Registrasi Berhasil");
  }, []);

  return (
    <section className="sign-up-success mx-auto pt-md-179 pb-md-179 pt-150 pb-100">
      <div className="container-fluid">
        <div className="text-center">
          <Image src={'/icon/signup-success.svg'} width={300} height={300} />
          
        </div>
        <div className="pt-70 pb-md-50 pb-150">
          <h2 className="text-4xl fw-bold text-center color-palette-1 mb-10">
            Well Done!
          </h2>
          <p className="text-lg text-center color-palette-1 m-0">
            Kamu sudah bisa melakukan top up
            <br className="d-sm-block d-none" />
            dan menjadi pemenang!
          </p>
        </div>
        <div className="button-group d-flex flex-column mx-auto">
          <a
            className="btn btn-top-up fw-medium text-lg text-white rounded-pill"
            href="/"
            role="button"
          >
            Top Up
          </a>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default SignUpSuccess;
