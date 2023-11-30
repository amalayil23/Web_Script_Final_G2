let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
const { collection } = require('./Bio_concert');


let User = mongoose.Schema({
    username:
    {
        type:String,
        default:"",
        trim:true,
        required: 'Username is required'
    },
    /*password:
    {
        type:String,
        default:"",
        trim:true,
        required: 'Password is required'
    }*/
    displayName:
    {
        type:String,
        default:"",
        trim:true,
        required: 'Displayname is required'
    },
    created:
    {
        type:Date,
        default: Date.now
    },
    update:
    {
        type:Date,
        default: Date.now
    }
},
{
    collection: "user"
}
)

//Configure options for user Model
let options = ({MissingPasswordError:'Wrong/Missing Password'});
User.plugin(passportLocalMongoose,options);
module.exports.User = mongoose.model('User',User);
