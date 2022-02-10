import OverviewContent from "../../components/organisms/OverviewContent";
import SideBar from "../../components/organisms/SideBar";

const MemberPage = () => {
  return (
    <>
      <section className="overview overflow-auto">
        <SideBar activeMenu="Overview"/>
        <OverviewContent />
      </section>
    </>
  );
};

export default MemberPage;
