import Link from "next/link";
import Image from "next/image";
import SignUpForm from "../components/organisms/SingUpForm";

const SignUpPage = () => {
  return (
    <>
      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
          <form action="">
            <div className="pb-50">
              <Link href="/">
                <a className="navbar-brand" href="/">
                  <Image src="/icon/logo.svg" width={60} height={60} />
                </a>
              </Link>
            </div>
            <SignUpForm />
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
