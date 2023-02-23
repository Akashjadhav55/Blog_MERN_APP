import { Image, Label } from '@mui/icons-material'
import { Button, ImageList, Input, InputLabel, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

function Create() {
  const [title, setTitle] = useState("")
  const [ description , setDescription] = useState("")
  const [avatar, setAvatar] = useState("")
  const [image, setImage] = useState([])
  const [ imageURL, setImageURL] = useState([])
  console.log(title)
  useEffect(() =>{
    if(image.length < 1) return
    else convertImageUrl()
  },[image])

  const handleSubmit = () => {
    
  }


  
  const handleImage = (e) => {
      setAvatar(e.target.files)
      setImage([...e.target.files])
  }
  
  const convertImageUrl = () =>  {
    const newImageURls = []
    image.forEach(img => newImageURls.push(URL.createObjectURL(img)))
    setImageURL(newImageURls);
  }

  return (
    <div>
      <form style={{border:"1px solid",margin:"20px",padding:"20px 50px 20px 50px "}}>
      <div style={{margin:"0px 50px" ,padding:"10px 50px",overflow:"hidden",display:"inline-block"}}>
        <Button variant='contained' ><Input   accept='image/*' multiple type="file" onChange={handleImage} /></Button>
        {imageURL.map(imgsrc => <img style={{width:"100%"}} src={imgsrc}/>)}
      </div>
      <TextField style={{padding:"20px 5px"}} fullWidth size='small' placeholder='Add a title' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      <TextField
          id="outlined-multiline-static"
          style={{padding:"20px 5px"}}
          placeholder='description'
          multiline
          rows={4}
          fullWidth
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      <Button variant='contained' onClick={handleSubmit}>Publish</Button>
      </form>
  
    </div>
  )
}

export default Create