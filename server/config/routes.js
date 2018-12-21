console.log("inside of routes.js");

const Pets = require("../controllers/pets");

module.exports = function(app){
    app.get("/pets", Pets.getAll);
    app.post("/pet/new", Pets.create);
    app.get("/pets/:id", Pets.getOne);
    app.put('/pet/:id', Pets.update);
    app.delete('/pet/:id', Pets.delete);
    
}