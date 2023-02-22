import Cookies from "universal-cookie";
import axios from "axios";

import React from 'react'

export default function TokenApi(url) {
  const cookies= new Cookies();
  let token = cookies.get('AccessToken');
  const authAxios = axios.create({
      baseURL: url,
      headers: {
          Authorization: `Bearer ${token}`,
      }
  });

  return  authAxios
}
