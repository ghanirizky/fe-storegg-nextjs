import jwtDecode from "jwt-decode";
import Image from "next/image";
import Input from "../../components/atoms/Input";
import SideBar from "../../components/organisms/SideBar";
import { onImageErr } from "../../helper";
import { JWTPayloadTypes, PlayerTypes } from "../../services/data-types";

const MemberEditPage = (props : {user : PlayerTypes}) => {
  const {user} = props
  console.log(user)
  return (
    <>
      <SideBar activeMenu="Settings" />
      <section className="edit-profile overflow-auto">
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <div className="photo d-flex">
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      <img src={`${process.env.NEXT_PUBLIC_IMG}/${user?.avatar}`} width={90} height={90}  onError={({ currentTarget }) => onImageErr(currentTarget, "upload")}/>
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                    />
                  </div>
                </div>
                <div className="pt-30">
                  <Input label="Full Name" placeholder="Enter your name" value={user.name} />
                </div>
                <div className="pt-30">
                  <Input
                    label="Email Address"
                    placeholder="Enter your email address"
                    value={user.email}
                    disabled
                  />
                </div>
                {/* <div className="pt-30">
                  <Input label="Phone" placeholder="Enter your phone number"/>
                </div> */}
                <div className="button-group d-flex flex-column pt-50">
                  <button
                    type="submit"
                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                    role="button"
                  >
                    Save My Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default MemberEditPage;

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
