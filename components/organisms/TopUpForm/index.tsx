import { NominalTypes, PaymentTypes } from "../../../services/data-types";
import NominalItem from "./NominalItem";
import PaymentItem from "./PaymentItem";

interface TopUpFormProps {
  nominals: NominalTypes[];
  payments: PaymentTypes[];
}

const TopUpForm = (prop: TopUpFormProps) => {
  const { nominals, payments } = prop;
  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <label
            for="ID"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Verify ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          {nominals.map((nominal: any) => {
            return (
              <NominalItem
                key={nominal._id}
                _id={nominal._id}
                coinQuantity={nominal.coinQuantity}
                coinName={nominal.coinName}
                price={nominal.price}
              />
            );
          })}

          <div className="col-lg-4 col-sm-6" />
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {payments.map((payment: any) => {
              return payment.banks?.map((bank: any) => {
                return (
                  <PaymentItem
                    key={bank?._id}
                    bankID={bank?._id}
                    type={payment.type}
                    name={bank?.bankName}
                  />
                );
              });
            })}
            <div className="col-lg-4 col-sm-6"></div>
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label
          htmlFor="bankAccount"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <a
          href="/checkout"
          type="submit"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
        >
          Continue
        </a>
      </div>
    </form>
  );
};

export default TopUpForm;
