// import { Image } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assesst/logo.png"
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <div className={styles.MainDiv}>
    <div className={styles.InDivOne}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="" />
      </Link>
    </div>
    <div className={styles.InDivTwo}>
        <Link to="/" >
          <Button variant='contained' >Home</Button>
        </Link>
        <Link  to="/create">
          <Button  variant='contained' className={styles.dashboard}>Create</Button>
        </Link>
       <Link to="/login">Login</Link>
    </div>
    
    </div>
  )
}

export default Navbar

