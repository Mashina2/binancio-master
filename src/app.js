const express = require("express")
const app = express();
require("./conn")
const port = process.env.PORT || 4000;

app.get("/", (req, res) =>{
    res.send("Hello from this side")
})
 
app.post("/price",(req,res)=>{
    res.send("Hello from this side")
})

app.listen(port, ()=>{
    console.log(`Connection is listen at ${port}`)
})