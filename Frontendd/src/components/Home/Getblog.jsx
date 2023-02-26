import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TokenApi from '../api/api'
import styled from "./Getblog.module.css"

function Getblog() {
    const [ blogs, setBlogs ] = useState("")
    const [ user, setUser ] = useState("")
    const blogID = useParams()

    const getData = () => {
        const url = `http://localhost:8080/blog/${blogID.id}`
        const authAxios = TokenApi(url)
        authAxios.get(url).
        then((res) => {
            setBlogs(res.data.blog)
        }).catch((err) => {
            console.log(err)
        })
    }
    
    // const userData = () => {
    //     const url = `http://localhost:8080/blog/user/${blogs.user}`
    //     const authAxios = TokenApi(url)
    //     authAxios.get(url).
    //     then((res) => {
    //             // console.log(res)
    //             setUser(res.data.userBlog)
    //         }).catch((err) => {
    //                 console.log(err)
    //             })
    //         }
            
            useEffect(() => {
                getData()
                // userData()
            },[])
            
            console.log(user)
            // console.log(blogs.user)
  return (
    <div className={styled.container}>
        <img className={styled.image} src={blogs.image} alt=""  />
        <h1 className={styled.title}>{blogs.title}</h1>
        <div className={styled.user}>
            <Avatar src={user.avatar} alt={user.name} />
            <p className={styled.userName}>{user.name}</p>
        </div>

        <p className={styled.paragraph}>{blogs.description}</p>
    </div>
  )
}

export default Getblog