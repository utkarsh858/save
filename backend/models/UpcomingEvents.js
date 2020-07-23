const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UpcomingEvents = new Schema(

{
	title: { type: String, required: true },
	image: { type: String, required: false },
	subTitle: { type: String, required: false },
	content: { type: String, required: false },
},
{
	timestamps:true,
},

)

module.exports = mongoose.model('News',News)