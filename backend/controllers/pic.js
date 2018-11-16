const passport = require('passport')
const sanitize = require('../utils/sanitize')
const mongoose = require('mongoose')
const colors = require('colors')

const Pic = mongoose.model('Pic')

module.exports = (router) => {
	router
		.route('/pic')
		.get((req, res) => {
				Pic.find({ }).lean().exec(function (err, cars) {
					if (err) return sanitize.cleanError(res, err)
					if (cars) return res.send(sanitize.clean(cars))
				})
			})
}