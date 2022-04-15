import { useState } from "react";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { toast } from "react-toastify";
import OverviewContent from "../../components/organisms/OverviewContent";
import SideBar from "../../components/organisms/SideBar";
import {
  JWTPayloadTypes,
  TranasctionOverviewTypes,
  PlayerTypes,
  TransactionTypes,
} from "../../services/data-types";
import { dashboard } from "../../services/player";

interface MemberOverview {
  history: TransactionTypes[];
  count: TranasctionOverviewTypes[];
}

const MemberPage = () => {
  const [transHist, setTransHist] = useState<TransactionTypes[]>([]);
  const [transOverview, setTransOverview] = useState<
    TranasctionOverviewTypes[]
  >([]);

  const getDashboardData = async (): Promise<void> => {
    const result = await dashboard();
    if (result.error) {
      toast.error(result.message);
      return;
    }
    const data: MemberOverview = result.data;
    setTransHist(data.history);
    setTransOverview(data.count);
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <>
      <section className="overview overflow-auto">
        <SideBar activeMenu="Overview" />
        <OverviewContent transHist={transHist} transOverview={transOverview} />
      </section>
    </>
  );
};

export default MemberPage;

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export const getServerSideProps = ({ req }: GetServerSideProps) => {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken: string = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const user: PlayerTypes = payload.player;
  return {
    props: {
      user,
    },
  };
};
