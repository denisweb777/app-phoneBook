const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//модели
const Person = require('../../../models/getData/http');

//-------------------------------------------------

//GET
router.get('/path1', function (req, res) {

	Person
		.find()
		.exec()
		.then(docs => {
			const response = {
				persons: docs.map(doc => {
					return {
						_id: doc._id,
						email: doc.email,
						company: doc.company,
						phone: doc.phone,
						photo: doc.photo,
						parameters: {
							firstName: doc.parameters.firstName,
							lastName: doc.parameters.lastName
						}
					};
				})
			};
			res.status(200).json(response);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
		});
	});
});

//--------------------------------------------------
//GET(id)

router.get("/path1/:personId", function (req, res) {

	let id = req.params['personId'];

	Person
		.find({ _id: id })
		.exec()
		.then(docs => { res.status(200).json(docs) })
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
})

//-------------------------------------------------

//GET(firstNameAndLastName)
router.get("/path3/:personFirstNameAndLastName", function (req, res) {

	let firstNameAndLastName = req.params['personFirstNameAndLastName'].split(",");
	
	Person
		.find({ "parameters.firstName": firstNameAndLastName[0], "parameters.lastName": firstNameAndLastName[1]})
		.exec()
		.then(docs => {
			return res.status(200).json(docs)
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
})

//-------------------------------------------------

//POST

router.post('/path2', function (req, res) {

	const person = new Person();

	person._id = new mongoose.Types.ObjectId();
	person.email = req.body.email;
	person.company = req.body.company;
	person.phone = req.body.phone;
	person.photo = req.body.photo;
	person.parameters = {
		firstName: req.body.parameters.firstName,
		lastName: req.body.parameters.lastName
	};

	person
		.save()
		.then(result => {
			console.log(result);
			res.status(201).json({ message: "Contact added to the database!" });
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: err });
		});

	/*
	person.save(function (err, person) {
    if (err) return console.error(err);
	})
	*/
	
});

//--------------------------------------------------

//PUT
router.put("/path4/:personId", function (req, res) {

	let id = req.params['personId'];

	Person
		.findByIdAndUpdate(id, { "phone": req.body.phone })
		.exec()
		.then(result => {
			console.log(result);
			res.status(200).json({ message: "Phone changed!" })
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

//--------------------------------------------------

//DELETE
router.delete('/path5/:personId', function (req, res) {

	let id = req.params['personId'];

	Person
		.remove({ _id: id, })
		.exec()
		.then(result => {
			console.log(result);
			res.status(200).json({ message: "Contact deleted!" })
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

module.exports = { rout: router };



