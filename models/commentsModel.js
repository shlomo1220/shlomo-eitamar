const mongoose = require("mongoose");
const Joi = require("joi");

let schema = new mongoose.Schema({
title:String,
info:String,
user_id:String,
menu_id:String,
test:{
type:Date , default:Date.now
},
date:Number,
})
exports.CommentModel = mongoose.model("comments",schema)

exports.validateJoi = (_reqBody) => {
let joiSchema = Joi.object({
title:Joi.string().min(2).max(50).required(),
info:Joi.string().min(2).max(999).required(),
menu_id:Joi.string().min(1).max(50).required(),
test:Joi.date().min(1).max(999).required(),
})
return joiSchema.validate(_reqBody)
}