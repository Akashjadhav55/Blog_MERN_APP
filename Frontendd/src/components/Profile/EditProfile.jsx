import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, ImageList, Input, InputLabel, TextField } from "@mui/material";
import Cookies from "universal-cookie";
import axios from "axios";
import TokenApi from "../api/api";
import { UpadteUser } from "../../redux/auth/action";
import swal from "sweetalert"


function EditProfile() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [bio, setBio] = useState("");
  const [mobile, setNumber] = useState("");
  const [image, setImage] = useState([]);
  const [avatar, setImageURL] = useState([]);
  let { userID } = useParams();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (image.length < 1) return;
    else convertImageUrl();
  }, [image]);

  const handleImage = (e) => {
    setImage([...e.target.files]);
  };

  const convertImageUrl = () => {
    const newImageURls = [];
    image.forEach((img) => newImageURls.push(URL.createObjectURL(img)));
    setImageURL(newImageURls);
  };

 

  const handleSubmit = () => {
    if(name.length == 0 && tagline.length == 0 && bio.length == 0 && mobile.length == 0 && avatar.length == 0){
      swal("Complete User Deatils!",{button: false,icon:'error'});
    }else{
    const payload = {
      _id: user._id,
      name: name,
      tagline: tagline,
      bio: bio,
      mobile: mobile,
      avatar: avatar,
    };
    const payload1 = {
      _id: user._id,
      email: user.email,
      name: name,
      tagline: tagline,
      bio: bio,
      mobile: mobile,
      avatar: avatar,
    };
    // userRouter.patch("/edit/:id", editProfile)
    let url = `http://localhost:8088/user/edit/${user._id}`;
    const authAxios = TokenApi(url);

    authAxios
      .patch(url, payload)
      .then((res) => {
        dispatch(UpadteUser(payload1));
        const cookies = new Cookies();
        cookies.set("loggedUser", payload1);
        // navigate("/profile");
      })
      .catch((err) => console.log(err));
    }
  };

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
