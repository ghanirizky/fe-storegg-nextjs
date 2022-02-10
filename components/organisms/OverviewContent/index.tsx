import React from "react";
import Category from "./Category";
import TableRowItem from "./TableRowItem";

const OverviewContent = () => {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <Category nominal={18000500} icon="ic-desktop">
                Game
                <br /> Desktop
              </Category>

              <Category nominal={8455000} icon="ic-mobile">
                Game
                <br /> Mobile
              </Category>

              <Category nominal={5000000} icon="ic-desktop">
                Other
                <br /> Categories
              </Category>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRowItem
                  icon="overview-1"
                  game="Mobile Legends: The New Battle 2021"
                  category="Desktop"
                  item={200}
                  price={290000}
                  status="Pending"
                />
                <TableRowItem
                  icon="overview-2"
                  game="Call of Duty:Modern"
                  category="Desktop"
                  item={550}
                  price={740000}
                  status="Success"
                />

                <TableRowItem
                  icon="overview-3"
                  game="Clash of Clans"
                  category="Mobile"
                  item={100}
                  price={120000}
                  status="Failed"
                />

                <TableRowItem
                  icon="overview-4"
                  game="The Royal Game"
                  category="Mobile"
                  item={225}
                  price={200000}
                  status="Pending"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OverviewContent;
