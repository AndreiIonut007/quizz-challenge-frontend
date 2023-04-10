import React, {useEffect} from "react";
import ProfileComp from "./ProfileComp";
import Portofolio from "./Portofolio";
import { addProfile, selectProfile } from "../../public/src/features/profileSlice";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Profile = () => {
  const MOCK_INTERVIEW_PLAT_ENDPIONT = "http://localhost:8181/api/v1/profile";
  const dispatch = useDispatch();
  const { data: session } = useSession();
  useEffect(() => {
    const fetchData = () => { 
      const response = axios
        .put (MOCK_INTERVIEW_PLAT_ENDPIONT, {email:session?.user.email}, {headers: {'Content-Type': 'application/json'}})
        .then((response) => {
          console.log("contacts:", response.data);
          dispatch(addProfile(response.data));
        })
        .catch((err) => {
            console.log(err)
        });
    };
    fetchData();
  }, [Profile]);
  return (
    <>
      <ProfileComp />
      <Portofolio />
    </>
  );
};

export default Profile;
