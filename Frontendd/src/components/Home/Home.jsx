import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TokenApi from "../api/api";
import styles from "./Home.module.css";
import Avatar from "@mui/material/Avatar";

import { useNavigate } from "react-router-dom";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const user = useSelector((store) => store.user.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const fetchData = () => {
    const url = `http://localhost:8080/blog/`;
    let authAxios = TokenApi(url);
    authAxios
      .get(url)
      .then((data) => {
        setBlogs(data.data.blogs);
      })
      .catch((err) => console.log(err));
    };
    
    useEffect(() => {
      fetchData();
    }, []);
    console.log(blogs)

  const handleClick = (id) => {
    navigate(`/blog/${id}`)
  }

  return (
    <div className={styles.main}>
      {blogs.map((blog) => (
        <div key={blog._id} onClick={() => handleClick(blog._id)} className={styles.container}>
          <div className={styles.user}>
              <Avatar src={user.avatar} alt={user.name} />
              <p className={styles.UserName}>{user.name}</p>
          </div>
          <img className={styles.img} src={blog.image} alt="" />
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
