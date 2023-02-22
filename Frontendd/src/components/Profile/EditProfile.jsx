import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, ImageList, Input, InputLabel, TextField } from '@mui/material'
import Cookies from "universal-cookie";
import axios from "axios"
import  TokenApi  from "../api/api";
import { UpadteUser } from "../../redux/auth/action";

function EditProfile() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("")
  const [ bio , setBio] = useState("")
  const [ mobile, setNumber] = useState("")
  const [image, setImage] = useState([])
  const [ avatar, setImageURL] = useState([])
  let { userID } = useParams();
  
  const user = useSelector((store) => store.user.userData);
  const dispatch = useDispatch()
  useEffect(() =>{
    if(image.length < 1) return
    else convertImageUrl()
  },[image])

  const handleImage = (e) => {
      console.log([...e.target.files])
      setImage([...e.target.files])
  }
  
  const convertImageUrl = () =>  {
    const newImageURls = []
    image.forEach(img => newImageURls.push(URL.createObjectURL(img)))
    setImageURL(newImageURls);
  }
console.log(user._id)

  const handleSubmit = () => {
    const payload = {
      _id : user._id,
      name : name,
      tagline : tagline,
      bio : bio,
      mobile : mobile,
      avatar: avatar,
    }
// userRouter.patch("/edit/:id", editProfile)
const url = `http://localhost:8088/user/edit/${user._id}`
    const authAxios = TokenApi(url)

    authAxios.patch(url, payload).
        then((res) => {
            console.log(res.data)
            // dispatch(UpadteUser(res))
            // const cookies = new Cookies()
            // cookies.set("loggedUser", res)
        } )
        .catch((err) => console.log(err))

  }



  console.log(userID);

  return (
    <div>
      <div style={{ padding: "20px", marginTop: "0vh" }}>
        <TextField
          style={{ padding: "10px" }}
          placeholder="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div
          style={{
            margin: "0px 50px",
            padding: "10px 50px",
            overflow: "hidden",
            display: "inline-block",
          }}
        >
          <Button variant="contained">
            <Input
              accept="image/*"
              multiple
              type="file"
              onChange={handleImage}
            />
          </Button>
          {avatar.map((imgsrc) => (
            <img style={{ width: "100%" }} src={imgsrc} />
          ))}
        </div>
        <TextField
          style={{ padding: "20px 5px" }}
          fullWidth
          size="small"
          placeholder="Tagline"
          type="text"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />
        <TextField
          id="outlined-multiline-static"
          style={{ padding: "20px 5px" }}
          placeholder="Bio"
          multiline
          rows={4}
          fullWidth
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <TextField
          style={{ padding: "10px" }}
          placeholder="Number"
          fullWidth
          value={mobile}
          onChange={(e) => setNumber(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Edit
        </Button>
      </div>
    </div>
  );
}

export default EditProfile;
