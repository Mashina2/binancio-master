const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://usdm:usdm123@cluster0.9e97h4h.mongodb.net/?retryWrites=true&w=majority",{
  
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("connection is successfull");
}).catch((e)=>{
    console.log("No connection",e)
})