const mongoose = require('mongoose');
 const prdctSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
 });
 const prdctModel = mongoose.model('products',prdctSchema);
 module.exports = prdctModel;