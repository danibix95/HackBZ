const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const PicSchema = new Schema({
	priref: {
		type: 'String'
	},
	creation: {
		type: 'Date'
	},
	modification: {
		type: 'Date'
	},
	DE: {
		type: [
			'Number'
		]
	},
	DS: {
		type: [
			'Number'
		]
	},
	IN: {
		type: 'String'
	},
	RI_de: {
		type: [
			'String'
		]
	},
	RI_it: {
		type: [
			'String'
		]
	},
	B1p: {
		type: [
			'String'
		]
	},
	B1p_url: {
		type: [
			'String'
		]
	},
	VV_de: {
		type: [
			'String'
		]
	},
	VV_it: {
		type: [
			'String'
		]
	},
	VV_de_syn: {
		type: [
			'String'
		]
	},
	VV_it_syn: {
		type: [
			'String'
		]
	},
	OB_de: {
		type: [
			'String'
		]
	},
	OB_it: {
		type: [
			'String'
		]
	},
	OB_de_syn: {
		type: [
			'String'
		]
	},
	OB_it_syn: {
		type: [
			'String'
		]
	},
	ip_de: {
		type: [
			'String'
		]
	},
	ip_it: {
		type: [
			'String'
		]
	},
	TK_de: {
		type: [
			'String'
		]
	},
	TK_it: {
		type: [
			'String'
		]
	},
	TK_de_syn: {
		type: [
			'String'
		]
	},
	TK_it_syn: {
		type: [
			'String'
		]
	},
	CP_de: {
		type: [
			'String'
		]
	},
	CP_it: {
		type: [
			'String'
		]
	},
	CP_geo: {
		type: [
			'String'
		]
	},
	CP_de_syn: {
		type: [
			'String'
		]
	},
	CP_it_syn: {
		type: [
			'String'
		]
	},
	CL_de: {
		type: [
			'String'
		]
	},
	CL_it: {
		type: [
			'String'
		]
	},
	MUS: {
		type: 'String'
	},
	BE_de: {
		type: [
			'String'
		]
	},
	BE_it: {
		type: [
			'String'
		]
	},
	public: {
		type: 'Boolean'
	},
	dim_de: {
		type: [
			'String'
		]
	},
	dim_it: {
		type: [
			'String'
		]
	},
	timestamp: {
		type: 'Date'
	},
	external: {
		type: 'Boolean'
	}
})

PicSchema.methods = {

}

mongoose.model('Pic', PicSchema)