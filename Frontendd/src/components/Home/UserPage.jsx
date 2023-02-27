import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../Profile/Profile.module.css";
import { Avatar, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Image, Label } from "@mui/icons-material";
import TokenApi from "../api/api";
import CircularProgress from "@mui/material/CircularProgress";

function User() {
  const [loading, setLoading] = useState(false);
  const [ user, setUser ] = useState("")
  const navigate = useNavigate();
  const userID = useParams();
  const hanldeUser = () => {
    let url = `http://localhost:8088/user/${userID.id}`;

    const authAxios = TokenApi(url);
    setLoading(true);
    authAxios
      .get(url)
      .then((res) => {
        setUser(res.data.existingUser)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    hanldeUser();
  }, []);


  return (
   
    <div>
      {loading ? (
        <CircularProgress  />
      ) : (
        <div className={styles.main}>
          <div className={styles.profile}>
            <div
              style={{
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
              }}
            >
              <img
                className={styles.avatar}
                alt={user.name}
                src={user.avatar}
              />
            </div>
            <label
              style={{
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Name :<h4>{user.name}</h4>
            </label>
            <label
              style={{
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Email :<h4>{user.email}</h4>
            </label>
            <label
              style={{
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Number : <h4>{user.mobile}</h4>
            </label>
            <label
              style={{
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Tag : <h4>{user.tagline}</h4>
            </label>
            <label
              style={{
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Bio : <h4>{user.bio}</h4>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
