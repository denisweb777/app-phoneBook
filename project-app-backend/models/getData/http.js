
const mongoose = require('mongoose');

const personSchema = mongoose.Schema({

	_id: mongoose.Schema.Types.ObjectId,

	email: String,
	company: String,
	phone: String,
	photo: String,
	parameters: {
		firstName: String,
		lastName: String
	}
},  { collection: 'person' });

module.exports = mongoose.model('Person', personSchema);


