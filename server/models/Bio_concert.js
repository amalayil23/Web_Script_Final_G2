let mongoose = require('mongoose');

// create a model class
let concertModel = mongoose.Schema({
    Artist:String,
    Genre:String,
    Venue:String,
    Date:String,
    Ticket_Price: String,
    Start_Time: String
},
{
    collection:"concerts"
});

//EXPORTING THE MODEL TO MAKE  IT AVAILABLE TO OTHER PARTS
module.exports = mongoose.model('Concert',concertModel);
