import React from "react";
import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

const SideBar = () => {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
            <MenuItem title="Overview" icon="ic-overview" active/>
            <MenuItem title="Transactions" icon="ic-transactions" href="/member/transactions"/>
            <MenuItem title="Messages" icon="ic-messages" />
            <MenuItem title="Card" icon="ic-card" />
            <MenuItem title="Rewards" icon="ic-rewards" />
            <MenuItem title="Settings" icon="ic-settings" href="/member/edit-profile"/>
            <MenuItem title="Log Out" icon="ic-logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default SideBar;
