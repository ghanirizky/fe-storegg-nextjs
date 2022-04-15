import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookieToken } from "../../../helper";
import { JWTPayloadTypes } from "../../../services/data-types";
import LoginMenu from "./LoginMenu";

const Auth = () => {
  const [avatar, setAvatar] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const token = getCookieToken(true) as JWTPayloadTypes;
    if (token) {
      setIsLogin(true);
      setAvatar(token.player.avatar ?? "");
    }
  }, []);

  const onLogout = () => {
    Cookies.remove("token");
    setIsLogin(false);
    router.push("/");
  };

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
              src={`${process.env.NEXT_PUBLIC_IMG}/${avatar}`}
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
            <LoginMenu
              title="Account Settings"
              href="/member/edit-profile"
            ></LoginMenu>
            <li onClick={onLogout}>
              <a className="dropdown-item text-lg color-palette-2">Log out</a>
            </li>
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
