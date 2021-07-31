const mongoose = require("mongoose");

const JokesDB = new mongoose.Schema({
	setup: {
		type:String,
		minlength:[10,"must be at least 10 characters"]},

	punchline:{
		type:String,
		minlength:[3,"must be at least 3 characters"]
	} 
});

const Jokes = mongoose.model("Jokes", JokesDB);

module.exports = Jokes;