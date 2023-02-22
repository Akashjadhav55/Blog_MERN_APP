import React from "react";
import { useSelector } from "react-redux";
import styles from "./Profile.module.css";
import { Avatar, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user.userData);

  console.log(user);

  return (
    <div className={styles.main}>
      <div className={styles.profile}>
        <Fab onClick={() => navigate("/editprofile")}  className={styles.editeButton} color="secondary" aria-label="edit">
          <EditIcon className={styles.edit} />
        </Fab>
        <Avatar
          className={styles.avatar}
          alt={user.name}
          src="/static/images/avatar/2.jpg"
        />
        <Typography>{user.name}</Typography>
      </div>
    </div>
  );
}

export default Profile;
