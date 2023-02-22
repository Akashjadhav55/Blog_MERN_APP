import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, ImageList, Input, InputLabel, TextField } from '@mui/material'
import Cookies from "universal-cookie";

function EditProfile() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("")
  const [ bio , setBio] = useState("")
  const [ number, setNumber] = useState("")
  const [image, setImage] = useState([])
  const [ imageURL, setImageURL] = useState([])
  let { userID } = useParams();
  
  const user = useSelector((store) => store.user.userData);
  
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

  const handleSubmit = () => {

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
          {imageURL.map((imgsrc) => (
            <img style={{ width: "100%" }} src={imgsrc} />
          ))}
        </div>
        <TextField
          style={{ padding: "20px 5px" }}
          fullWidth
          size="small"
          placeholder="Add a title"
          type="text"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />
        <TextField
          id="outlined-multiline-static"
          style={{ padding: "20px 5px" }}
          placeholder="description"
          multiline
          rows={4}
          fullWidth
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <TextField
          style={{ padding: "10px" }}
          placeholder="Email"
          fullWidth
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>
          SignUp
        </Button>
      </div>
    </div>
  );
}

export default EditProfile;
