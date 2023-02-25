import React from "react";
import { useSelector } from "react-redux";
import styles from "./Profile.module.css";
import { Avatar, Button, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import { useNavigate } from "react-router-dom";
import { Image, Label } from "@mui/icons-material";

function Profile() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.userData);

  return (
    <div className={styles.main}>
      <div className={styles.profile}>
        <div style={{margin:"auto",display:"flex",justifyContent:"center",alignItems:"end"}} >
          <img className={styles.avatar} alt={user.name} src={user.avatar} />
          <Fab
            onClick={() => navigate(`/editprofile/${user._id}`)}
            className={styles.editeButton}
            color="secondary"
            aria-label="edit"
          >
            <EditIcon className={styles.edit} />
          </Fab>
        </div>
        <label style={{fontSize:"20px" , display: "flex", alignItems: "center" }}>
          Name :<h4>{user.name}</h4>
        </label>
        <label style={{fontSize:"20px" ,display: "flex", alignItems: "center" }}>

          Email :<h4>{user.email}</h4>
        </label>
        <label style={{fontSize:"20px" ,display: "flex", alignItems: "center" }}>
          Number : <h4>{user.mobile}</h4>
        </label>
        <label style={{fontSize:"20px" ,display: "flex", alignItems: "center" }}>
          Tag : <h4>{user.tagline}</h4>
        </label>
        <label style={{fontSize:"20px" ,display: "flex", alignItems: "center" }}>
          Bio : <h4>{user.bio}</h4>
        </label>
      </div>
      <div>
      
      </div>
    </div>
  );
}

export default Profile;
