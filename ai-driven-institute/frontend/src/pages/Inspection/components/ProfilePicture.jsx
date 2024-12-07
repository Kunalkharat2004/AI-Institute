import { Avatar } from "@mui/material";
import React from "react";
import useTokenStore from "../../../store/userTokenStore";
import {jwtDecode} from "jwt-decode";

const ProfilePicture = () => {
  const { token } = useTokenStore((state) => state);
  const user = token ? jwtDecode(token) : { email: "User" };
  
  return (
    <div className="bg-white p-6 border shadow-lg rounded-lg flex flex-col items-center justify-center space-y-4">
      {/* Profile Picture */}
      <div className="h-28 w-28 md:h-36 md:w-36 rounded-full flex items-center justify-center shadow-md">
        <Avatar
          alt="User"
          sx={{
            bgcolor: "secondary.main",
            width: "100%", // Larger width for the Avatar
            height: "100%", // Larger height for the Avatar
            fontSize: "50px", // Larger font size for the initial
          }}
        >
          {user.email[0].toUpperCase()}
        </Avatar>
      </div>
      {/* User Information */}
      <p className="text-gray-800 text-lg font-semibold">
        {user.email}
      </p>
      <p className="text-sm text-gray-500">Welcome to your profile</p>
    </div>
  );
};

export default ProfilePicture;