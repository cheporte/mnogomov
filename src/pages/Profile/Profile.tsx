import React from "react";
import "./Profile.sass";

import CustomButton from "@components/CustomButton";
import { Link } from "react-router-dom";

type ProfileProps = {
  userName: string;
  learningLang: string;
  progress: number;
};

const Profile: React.FC<ProfileProps> = ({ userName, learningLang, progress }) => {
  return (
    <div className='profile'>
        <Link to="/">
            <CustomButton className='backBtn' variant="ghost" size="lg">Back</CustomButton>
        </Link>
      <div className='profileContent'>
        <h1 className='title'>Your Profile</h1>
        <div className='details'>
          <img className='profilePic' src="/mnogomov-logo.png" alt="Profile Picture" />
          <div className='detail'>
            <span className='label'>Name:</span>
            <span className='value'>{userName}</span>
          </div>
          <div className='detail'>
            <span className='label'>Learning:</span>
            <span className='value'>{learningLang}</span>
          </div>
          <div className='detail'>
            <span className='label'>Progress:</span>
            <span className='value'>{progress}%</span>
          </div>
        </div>
        <button className='editButton'>Change Image</button>
        <button className='editButton'>Change Username</button>
        <button className='editButton'>App Settings</button>
      </div>
    </div>
  );
};

export default Profile;
