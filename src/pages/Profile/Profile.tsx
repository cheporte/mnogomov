import React from "react";
import styles from "./Profile.module.scss";

import CustomButton from "../../components/CustomButton/CustomButton";
import { Link } from "react-router-dom";

type ProfileProps = {
  userName: string;
  learningLang: string;
  progress: number;
};

const Profile: React.FC<ProfileProps> = ({ userName, learningLang, progress }) => {
  return (
    <div className={styles.profile}>
        <Link to="/">
            <CustomButton className={styles.backBtn} variant="ghost" size="lg">Back</CustomButton>
        </Link>
      <div className={styles.profileContent}>
        <h1 className={styles.title}>Your Profile</h1>
        <div className={styles.details}>
          <img className={styles.profilePic} src="/mnogomov-logo.png" alt="Profile Picture" />
          <div className={styles.detail}>
            <span className={styles.label}>Name:</span>
            <span className={styles.value}>{userName}</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.label}>Learning:</span>
            <span className={styles.value}>{learningLang}</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.label}>Progress:</span>
            <span className={styles.value}>{progress}%</span>
          </div>
        </div>
        <button className={styles.editButton}>Change Image</button>
        <button className={styles.editButton}>Change Username</button>
        <button className={styles.editButton}>App Settings</button>
      </div>
    </div>
  );
};

export default Profile;
