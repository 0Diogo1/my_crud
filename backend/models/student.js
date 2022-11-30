const mongoose = require('../db/conn')
const {Schema} = mongoose

const Student = mongoose.model(
    'Student',
    new Schema({
        name:{
            type:String,
            required:true
        },
        age:{
            type:String,
            required:true
        },
        degree:{
            type:String,
            required:true
        },
        status:{
            type:String,
            required:true
        }
    }, {timestamps:true})
)

module.exports = Student