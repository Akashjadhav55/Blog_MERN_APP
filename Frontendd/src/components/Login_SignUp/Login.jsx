import React from 'react'
import { TextField, Button } from '@mui/material'
import { useState, useEffect} from 'react'

function Login() {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

  return (
    <div style={{margin:"10vh 25% 0 25%" , textAlign:"center"}}>
        <h1>Login</h1>
    <div style={{padding:"20px", marginTop:"0vh"}}>
        <TextField style={{padding:"10px"}}
            placeholder="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        <TextField
            style={{padding:"10px"}}
            value={password}
            type="text"
            placeholder='Password'
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            />
        <Button variant="contained">Login</Button>
    </div> 
    </div>
  )
}

export default Login