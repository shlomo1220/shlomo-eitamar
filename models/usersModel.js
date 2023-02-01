const mongoose = require("mongoose");
const Joi = require("joi");

let schema = new mongoose.Schema({
name:String,
email:String,
phone:String,
password:String,
date_create:{
type:Date , default:Date.now
},
groups:Array,
})
exports.UserModel = mongoose.model("users",schema)

exports.validateJoi = (_reqBody) => {
let joiSchema = Joi.object({
name:Joi.string().min(2).max(100).required(),
email:Joi.string().min(15).max(100).email().required(),
phone:Joi.string().min(4).max(30).required(),
password:Joi.string().min(4).max(100).required(),
date_create:Joi.date().min(4).max(20).required(),
groups:Joi.array().min(1).max(999).required(),
})
return joiSchema.validate(_reqBody)
}