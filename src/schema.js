const mongoose = require("mongoose");

const PriceSchema = new mongoose.Schema({
    price : {
        type:String,
        required:true
    }
  });

const PriceModel = new mongoose.model("Price", PriceSchema)
module.exports = PriceModel