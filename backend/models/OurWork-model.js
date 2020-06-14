const mongoose = require('mongoose')

const Schema = mongoose.Schema

const OurWork = new Schema(

{
	title: { type: String, required: true },
	content: { type: String, required: true },
},
{
	timestamps:true,
},

)

module.exports = mongoose.model('our_works',OurWork)