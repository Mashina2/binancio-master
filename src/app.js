const express = require("express")
const app = express();
const Price = require("./schema")
require("./conn")
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
    });

app.get("/", (req, res) =>{
    res.send("Hello from server")
})

app.get("/mmkprice", async(req, res) =>{
    try {
        const data = await Price.find();
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})
 
app.post("/price",(req,res)=>{
    console.log(req.body)
    const data = new Price(req.body)
    data.save().then(()=>{
        res.send(data)
    }).catch((e)=> {
        res.send(e)
    })
})

app.listen(port, ()=>{
    console.log(`Connection is listen at ${port}`)
})