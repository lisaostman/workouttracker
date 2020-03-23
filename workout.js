const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Number,
    trim: true,
    required: "Enter a date for the workout"
  },
  exercises: {
    type: Array,
    required: "Enter an exercise"
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

