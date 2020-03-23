const router = require("express").Router();
const path = require("path");
const Workout = require("./workout.js");
const API = require("./public/API.js");
var db = require("./workout.js");

router.get("/api/workouts", (req, res) => {
    db.find({})
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
  });
  
  router.post("/api/workouts/:id", ({ body }, res) => {
    const id = params.id;
        let savedExercises = [];

        // gets all the currently saved exercises in the current workout
        db.find({_id: id})
            .then(dbWorkout => {
                // console.log(dbWorkout)
                savedExercises = dbWorkout[0].exercises;
                res.json(dbWorkout[0].exercises);
                let allExercises = [...savedExercises, body]
                console.log(allExercises)
                updateWorkout(allExercises)
            })
            .catch(err => {
                res.json(err);
            });

        function updateWorkout(exercises){
            db.findByIdAndUpdate(id, {exercises: exercises}, function(err, doc){
            if(err){
                console.log(err)
            }

            })
        }
  });
  
  router.post("/api/workouts", ({ body }, res) => {
    try{
        const response = db.create({type: "workout"});
        res.json(response);
    }
    catch(err){
        console.log("error occurred creating a workout: ", err)
    }
  });
  
  router.get("/api/workouts/range", (req, res) => {
    db.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    }); 
  
  router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
  });
  
  router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/stats.html"));
  });

  module.exports = {
    router: router
  }  