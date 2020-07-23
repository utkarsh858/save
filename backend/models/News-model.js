const mongoose = require('mongoose')

const Schema = mongoose.Schema

const News = new Schema(

{
	title: { type: String, required: true },
	image: { type: String, required: false },
	subTitle: { type: String, required: false },
	content: { type: String, required: false },
	date: { type: Date, required: false },
},
{
	timestamps:true,
},

)

module.exports = mongoose.model('News',News)