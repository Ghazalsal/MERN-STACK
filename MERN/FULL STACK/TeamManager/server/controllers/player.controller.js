const { Player } = require('../models/player.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

//------------------------------- Creating Players----------------------------------
module.exports.createPlayer = (request, response) => {
    const { name, position,game1,game2,game3 } = request.body;
    Player.create({
        name,
        position,
        status:{
            game1,
            game2,
            game3
        }
    })
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err));
}
//-----------------------------------------------------------------------------------

//------------------------------- Getting All Players--------------------------------
module.exports.getAllPlayer = (request, response) => {
    Player.find({})
        .then(player => response.json(player))
        .catch(err => response.json(err))
}
//-----------------------------------------------------------------------------------

//------------------------------ Get One Player--------------------------------------
module.exports.getPlayer = (request, response) => {
    Player.findOne({_id:request.params.id})
        .then(player => response.json(player))
        .catch(err => response.json(err))
}
//-----------------------------------------------------------------------------------

//------------------------------ Update Player --------------------------------------
module.exports.updatePlayer = (request, response) => {
    Player.findOneAndUpdate({_id:request.params.id},req.body,{new:true,runValidations:true})
        .then(playerUpdated => response.json(playerUpdated))
        .catch(err => response.status(400).json(err))
}
//-----------------------------------------------------------------------------------


//------------------------------ Delete Player --------------------------------------
module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
//-----------------------------------------------------------------------------------