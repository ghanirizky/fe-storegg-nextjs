import React from "react";
import {
  TransactionTypes,
  TranasctionOverviewTypes,
} from "../../../services/data-types";
import Category from "./Category";
import TableRowItem from "./TableRowItem";

interface MemberOverview {
  transHist: TransactionTypes[];
  transOverview: TranasctionOverviewTypes[];
}

const OverviewContent = (props: MemberOverview) => {
  const { transHist, transOverview } = props;

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
              {transOverview?.map((item) => {
                return (
                  <Category
                    nominal={item.value}
                    icon={item.name == "Mobile" ? "ic-mobile" : "ic-desktop"}
                  >
                    Game
                    <br /> {item.name}
                  </Category>
                );
              })}
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
                {transHist?.map((item) => {
                  return (
                    <TableRowItem
                      icon="overview-1"
                      game={item.historyVoucherTopup.gameName}
                      category={item.historyVoucherTopup.category}
                      item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                      price={item.historyVoucherTopup.price}
                      status={item.status}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OverviewContent;
