import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TransactionTypes } from "../../../services/data-types";
import { transHistory } from "../../../services/member";
import FormatRupiah from "../../atoms/FormatRupiah";
import ButtonTab from "./ButtonTab";
import TableRow from "./TableRow";

interface TransactionContentTypes {
  total: number;
  transactions: TransactionTypes[];
}

const TransactionContent = () => {
  const [total, setTotal] = useState(0);
  const [transactions, setTransactions] = useState<TransactionTypes[]>([]);
  const [tab, setTab] = useState("");

  const getTransHistory = async (): Promise<void> => {
    const result = await transHistory(tab);
    if (result.error) {
      toast.error(result.message);
      return;
    }
    const data: TransactionContentTypes = result.data;
    setTotal(data.total);
    setTransactions(data.transactions);
  };

  useEffect(() => {
    getTransHistory();
  }, [tab]);

  return (
    <section className="transactions overflow-auto">
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            My Transactions
          </h2>
          <div className="mb-30">
            <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
            <h3 className="text-5xl fw-medium color-palette-1">
              <FormatRupiah nominal={total} />
            </h3>
          </div>
          <div className="row mt-30 mb-20">
            <div className="col-lg-12 col-12 main-content">
              <div id="list_status_title">
                <ButtonTab
                  onClick={() => setTab("")}
                  title="All Trx"
                  active={tab == ""}
                />
                <ButtonTab
                  onClick={() => setTab("success")}
                  title="Success"
                  active={tab == "success"}
                />
                <ButtonTab
                  onClick={() => setTab("pending")}
                  title="Pending"
                  active={tab == "pending"}
                />
                <ButtonTab
                  onClick={() => setTab("failed")}
                  title="Failed"
                  active={tab == "failed"}
                />
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
                    <th className="" scope="col">
                      Game
                    </th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody id="list_status_item">
                  {transactions.map((item) => {
                    return (
                      <TableRow
                        key={item._id}
                        image={item.historyVoucherTopup.thumbnail}
                        title={item.historyVoucherTopup.gameName}
                        category={item.historyVoucherTopup.category}
                        item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                        price={item.historyVoucherTopup.price}
                        status={item.status}
                        id={item._id}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default TransactionContent;
