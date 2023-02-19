import Cookies from "universal-cookie";

import React from 'react'

function Api() {
    const cookie= new Cookies();
    let token = cookie.get('AccessToken');
    const handleSubmit = () => {
        console.log(cookie)
        console.log(token)
    }
  return (
    <div>api
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Api