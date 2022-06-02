const interview = require("./src/interview.js");

function run() {
  setInterval(async()=>{
    const data = await interview()
    console.log("Price",data)
  },3000);
}

run();