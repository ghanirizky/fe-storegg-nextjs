import { TransactionTypes } from "../../../services/data-types";
import DetailRow from "./DetailRow";

const TransactionDetailContent = (props: { transaction: TransactionTypes }) => {
  const { transaction } = props;

  return (
    <section className="transactions-detail overflow-auto">
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            Details {transaction?._id}
          </h2>
          <div className="details">
            <div className="main-content main-content-card overflow-auto">
              <section className="checkout mx-auto">
                <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                  <div className="game-checkout d-flex flex-row align-items-center">
                    <div className="pe-4">
                      <div className="cropped">
                        <img
                          src={`${process.env.NEXT_PUBLIC_IMG}/${transaction?.historyVoucherTopup.thumbnail}`}
                          width="200"
                          height="130"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <p className="fw-bold text-xl color-palette-1 mb-10">
                        {transaction?.historyVoucherTopup.gameName}
                      </p>
                      <p className="color-palette-2 m-0">
                        Category: {transaction?.category.name}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p
                      className={`fw-medium text-center label ${transaction?.status} m-0 rounded-pill trans-status`}
                    >
                      {transaction?.status}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="purchase pt-30">
                  <h2 className="fw-bold text-xl color-palette-1 mb-20">
                    Purchase Details
                  </h2>
                  <DetailRow
                    label="Your Game ID"
                    value={transaction?.accountUser}
                  />
                  <DetailRow label="Order ID" value={transaction?._id} />
                  <DetailRow
                    label="Item"
                    value={`${
                      transaction?.historyVoucherTopup.coinQuantity ?? ""
                    } ${transaction?.historyVoucherTopup.coinName ?? ""}`}
                  />
                  <DetailRow label="Price" value={transaction?.value} />
                  <DetailRow label="Tax (10%)" value={transaction?.tax} />
                  <DetailRow
                    label="Total"
                    value={transaction?.value + transaction?.tax}
                    className="color-palette-4"
                  />
                </div>
                <div className="payment pt-10 pb-10">
                  <h2 className="fw-bold text-xl color-palette-1 mb-20">
                    Payment Informations
                  </h2>

                  <DetailRow
                    label="Your Account Name"
                    value={transaction?.name}
                  />
                  <DetailRow
                    label="Type"
                    value={transaction?.historyPayment.type}
                  />
                  <DetailRow
                    label="Bank Name"
                    value={transaction?.historyPayment.bankName}
                  />
                  <DetailRow
                    label="Bank Account Name"
                    value={transaction?.historyPayment.name}
                  />
                  <DetailRow
                    label="Bank Number"
                    value={transaction?.historyPayment.noRekening}
                  />
                </div>
                <div className="d-md-block d-flex flex-column w-100">
                  <a
                    className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                    href="#"
                    role="button"
                  >
                    WhatsApp ke Admin
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default TransactionDetailContent;
