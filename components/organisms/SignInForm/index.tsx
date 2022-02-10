import Image from "next/image";
import Link from "next/link";
const SignInForm = () => {
  return (
    <>
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
              for="email"
              className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
              Email Address
            </label>
            <input
              type="email"
              className="form-control rounded-pill text-lg"
              id="email"
              name="email"
              aria-describedby="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="pt-30">
            <label
              for="password"
              className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-pill text-lg"
              id="password"
              name="password"
              aria-describedby="password"
              placeholder="Your password"
            />
          </div>
          <div className="button-group d-flex flex-column mx-auto pt-50">
            <a
              className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
              href="../index.html"
              role="button"
            >
              Continue to Sign In
            </a>
            <a
              className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
              href="/sign-up"
              role="button"
            >
              Sign Up
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignInForm;
