const express = require("express")
const app = express()



const port = 8080

app.get("/", (res,req)=>{

})

app.listen(port, () => {
    console.log("server is running on http://localhost:"+ port)
})

let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );