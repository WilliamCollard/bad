console.log("inside of pets.js");

const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");

class Pets {
    getAll(req, res){
        Pet.find({}).sort("type").exec(function(err, pets){
            if(err){
                res.json({"status": "not ok", "errors" : err});
            }else{
                res.json({"status": "ok", "pets": pets});
            }
        });
    }
    create(req, res){
        let pet = new Pet(req.body);
        pet.save(function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }else{
                res.json({"status": "ok"});
            }
        });
    }
    getOne(req, res){
        Pet.findOne({_id: req.params.id}, function(err, pet){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }else{
                res.json({"status": "ok", "pet": pet});
            }
        });
    }

    update(req, res){
        Pet.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true}, function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }else{
                res.json({"status": "ok"});
            }
        })
    }

    delete(req, res){
        Pet.remove({_id: req.params.id}, function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }else{
                res.json({"status": "ok"});
            }
        })
    }
}

module.exports = new Pets();