import { useRouter } from "next/router";

import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";
import { TransactionTypes } from "../../../services/data-types";
import { transHistoryDetail } from "../../../services/member";

const MemberTransactionDetail = (props: { transaction: TransactionTypes }) => {
  const { transaction } = props;
  return (
    <>
      <TransactionDetailContent transaction={transaction!} />
    </>
  );
};

export default MemberTransactionDetail;

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    id: string;
  };
}

export const getServerSideProps = async ({
  req,
  params,
}: GetServerSideProps) => {
  const { token } = req.cookies;
  const { id } = params;

  if (!token)
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };

  const jwtToken: string = Buffer.from(token, "base64").toString("ascii");
  const result = await transHistoryDetail(id, jwtToken);

  return {
    props: {
      transaction: result.data,
    },
  };
};
