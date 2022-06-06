const interview = require("./src/interview.js");
const axios = require('axios')

function run() {
  setInterval(async()=>{
    const data = await interview()
    console.log("Price",data)
    axios.post('https://price.loca.lt/price',{
          "price":data[0].toString()
        })
            .then(function (response) {
              console.log("mmkprice",response);
    
            })
          .catch(function (error) {
          console.log("Error",error);
        });
    console.log("running")
  },3600000);
}

run();