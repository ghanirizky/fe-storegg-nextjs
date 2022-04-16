import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SideBarProps {
  activeMenu: string;
}

const SideBar = (props: SideBarProps) => {
  const router = useRouter();

  const onLogout = () => {
    Cookies.remove("token");
    router.push("/");
  };
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="ic-overview"
            active={activeMenu === "Overview"}
          />
          <MenuItem
            title="Transactions"
            icon="ic-transactions"
            href="/member/transactions"
            active={activeMenu === "Transactions"}
          />
          <MenuItem
            title="Messages"
            icon="ic-messages"
            active={activeMenu === "Messages"}
          />
          <MenuItem
            title="Card"
            icon="ic-card"
            active={activeMenu === "Card"}
          />
          <MenuItem
            title="Rewards"
            icon="ic-rewards"
            active={activeMenu === "Rewards"}
          />
          <MenuItem
            title="Settings"
            icon="ic-settings"
            href="/member/edit-profile"
            active={activeMenu === "Settings"}
          />
          <MenuItem
            title="Log Out"
            icon="ic-logout"
            active={activeMenu === "Log Out"}
            onClick={onLogout}
          />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default SideBar;
