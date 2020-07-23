const mongoose = require('mongoose')

const Schema = mongoose.Schema

const OurWork = new Schema(

{
	title: { type: String, required: true },
	subTitle: { type: String, required: false },
	content: { type: String, required: true },
	coverImage: { type: String, required: true },
	date: { type: Date, required: false },
	images: [image: { type: String, required: true }]
},
{
	timestamps:true,
},

)

module.exports = mongoose.model('our_work',OurWork)