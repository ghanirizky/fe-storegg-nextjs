import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getCookieToken, onImageErr } from "../../../helper";
import { JWTPayloadTypes, PlayerTypes } from "../../../services/data-types";
import { getProfile } from "../../../services/member";

const Profile = () => {
  const [player, setPlayer] = useState<PlayerTypes>();

  const getProfileData = async () => {
    const result = await getProfile();
    if (result.error) return toast.error(result.message);
    setPlayer(result.data);
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      <img
        src={`${process.env.NEXT_PUBLIC_IMG}/${player?.avatar}`}
        width="90"
        height="90"
        className="img-fluid mb-20"
        onError={({ currentTarget }) => onImageErr(currentTarget)}
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">
        {player?.username}
      </h2>
      <p className="color-palette-2 m-0">{player?.email}</p>
    </div>
  );
};

export default Profile;
