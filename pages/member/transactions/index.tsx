import SideBar from "../../../components/organisms/SideBar";
import TransactionContent from "../../../components/organisms/TransactionsContent";

const MemberTransactionDetail = () => {
  return (
    <>
      <SideBar activeMenu="Transactions" />
      <TransactionContent />
    </>
  );
};

export default MemberTransactionDetail;
