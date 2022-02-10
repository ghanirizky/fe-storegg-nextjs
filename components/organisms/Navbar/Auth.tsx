import Link from "next/link";
import LoginMenu from "./LoginMenu";

interface AuthProps {
  isLogin?: boolean;
}

const Auth = (props: Partial<AuthProps>) => {
  const { isLogin } = props;

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="/img/avatar-1.png"
              className="rounded-circle"
              width="40"
              height="40"
              alt=""
            />
          </a>

          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <LoginMenu title="My Profile" href="/member"></LoginMenu>
            <LoginMenu title="Wallet" href="/"></LoginMenu>
            <LoginMenu title="Account Settings" href="/member/edit-profile"></LoginMenu>
            <LoginMenu title="Log Out" href="/sign-in"></LoginMenu>
          </ul>
        </div>
      </li>
    );
  } else {
    return (
      <li className="nav-item my-auto">
        <Link href="/sign-in">
          <a
            className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
            role="button"
          >
            Sign In
          </a>
        </Link>
      </li>
    );
  }
};

export default Auth;
