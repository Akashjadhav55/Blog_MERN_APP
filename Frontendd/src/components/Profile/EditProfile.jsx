import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import Cookies from 'universal-cookie';

function EditProfile() {

   const user = useSelector((store) => store.user.userData)
   
   let { userID } = useParams()
   console.log(userID)
  return (
    <div>EditProfile</div>
  )
}

export default EditProfile