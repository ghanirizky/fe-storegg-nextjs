import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn } from "../../../services/auth";
import Cookies from 'js-cookie'


const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = async () => {
    const payload = { email, password };
    if (!email || !password)
      return toast.error("Email dan Password wajib di isi");

    const result = await signIn(payload);

    if (result.error) return toast.error(result.message);

    const {token} = result.data
    const tokenBase64 = btoa(token)
    Cookies.set('token', tokenBase64, {expires : 1})
    toast.success("Login berhasil");
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  return (
    <>
      <ToastContainer />
      <form action="">
        <div className="container mx-auto">
          <div className="pb-50">
            <Link href={`/`}>
              <a className="navbar-brand">
                <Image src="/icon/logo.svg" width={60} height={60} />
              </a>
            </Link>
          </div>
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
          <p className="text-lg color-palette-1 m-0">
            Masuk untuk melakukan proses top up
          </p>
          <div className="pt-50">
            <label
              htmlFor="email"
              className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
              Email Address
            </label>
            <input
              type="email"
              className="form-control rounded-pill text-lg"
              aria-describedby="email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="pt-30">
            <label
              htmlFor="password"
              className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-pill text-lg"
              onChange={(e) => setPassword(e.target.value)}
              aria-describedby="password"
              placeholder="Your password"
              value={password}
            />
          </div>
          <div className="button-group d-flex flex-column mx-auto pt-50">
            <button
              className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
              type="button"
              onClick={onSubmit}
            >
              Continue to Sign In
            </button>

            <Link href="/sign-up">
              <a
                className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
                role="button"
              >
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignInForm;
