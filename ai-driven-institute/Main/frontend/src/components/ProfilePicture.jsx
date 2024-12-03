import React from "react";

const ProfilePicture = () => {
  return (
    <div className="bg-gray-100 p-4 border rounded-lg flex flex-col items-center">
      <div className="h-32 w-32 bg-gray-300 rounded-full flex items-center justify-center">
        <span>Profile</span>
      </div>
      <p className="text-red-500 mt-2 text-sm">
        If the profile picture is not getting updated, please try log off and log in.
      </p>
    </div>
  );
};

export default ProfilePicture;
