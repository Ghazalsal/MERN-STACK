const PlayerController = require('../controllers/player.controller');
module.exports = function(app){
    app.get('/api', PlayerController.index);
    app.post('/api/players/addplayer', PlayerController.createPlayer);
    app.get('/api/players/list', PlayerController.getAllPlayer);
    app.get('/api/players/:id', PlayerController.getPlayer);
    app.delete('/api/players/:id', PlayerController.deletePlayer);
}   
