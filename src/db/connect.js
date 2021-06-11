const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/kissu',{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true});

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error;'))
db.once('open',function(){
    console.log("we are connected..")
});

const Details = new mongoose.Schema({
<<<<<<< HEAD
=======
    // image:{
    //     type:String,
    //     required:true
    // },
>>>>>>> 47804d171bcc5542cef62d9cc48506ba903aefb0
    ownername:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    kitchenname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Fssaino:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    preptime:{
        type:String,
        required:true
    },
    food:{
        type:String,
        required:true
    },
    breakfastfrom:{
        type:String,
        required:true
    },
    lunchfrom:{
        type:String,
        required:true
    },
    highteafrom:{
        type:String,
        required:true
    },
    dinnerfrom:{
        type:String,
        required:true
    },
    breakfastto:{
        type:String,
        required:true
    },
    lunchto:{
        type:String,
        required:true
    },
    highteagto:{
        type:String,
        required:true
    },
    dinnerto:{
        type:String,
        required:true
    },
});

const Register = mongoose.model('Register',Details)

module.exports = Register;
