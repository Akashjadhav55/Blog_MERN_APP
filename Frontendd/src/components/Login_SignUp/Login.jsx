import React from 'react'
import { TextField, Button } from '@mui/material'
import { useState, useEffect} from 'react'

function Login() {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const url= "http://localhost:8080/user/signup"
    const handleSubmit = () => {
            setDoing(true)
            axios.post(url, {
                name,
                email,
                password,
            })
            .then((res) => {
                navigate("/login")
            }).catch((err) => {
                console.log(err)
            }).finally(() => setDoing(false))
    }

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
        <Button variant="contained" onClick={handleSubmit}>Login</Button>
    </div> 
    </div>
  )
}

export default Login