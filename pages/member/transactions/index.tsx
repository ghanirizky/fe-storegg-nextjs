import SideBar from "../../../components/organisms/SideBar";
import TransactionContent from "../../../components/organisms/TransactionsContent";

const MemberTransactions = () => {
  return (
    <>
      <SideBar activeMenu="Transactions" />
      <TransactionContent />
    </>
  );
};

export default MemberTransactions;

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export const getServerSideProps = ({ req }: GetServerSideProps) => {
  const { token } = req.cookies;

  if (!token)
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };

  return {
    props: {},
  };
};
