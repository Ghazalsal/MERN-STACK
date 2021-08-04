const { Author } = require('../models/author.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.create = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
}
module.exports.getAllAuthor = (request, response) => {
    Author.find({})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}
module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuthor => {response.json(updatedAuthor)
        console.log("hadeel in .then backend")
})
        .catch(err => response.status(400).json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
