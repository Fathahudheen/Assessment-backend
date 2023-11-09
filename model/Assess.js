const mongoose = require("mongoose");
const { schema } = require("./Users");

const Schema = mongoose.Schema;

const AssessmenSchema = new Schema({
    question:{
      type:String,
      // required:true
  },
  option1:{
    type:String,
  },
  isCorrect1:{
    type:Boolean,
  },
  option2:{
    type:String,
  },
  isCorrect2:{
    type:Boolean,
  },

  option3:{
    type:String,
  },
  isCorrect3:{
    type:Boolean,
  },

  option4:{
    type:String,
  },
  isCorrect4:{
    type:Boolean,
  },

  
  });
  const postScorechema =  new Schema({
    score:{
      type:String
    }

  })
  
  // module.exports = mongoose.model("Assessment",AssessmenSchema);
 Assessment = mongoose.model("Assessment",AssessmenSchema);
 PostScore = mongoose.model("PostScore",postScorechema);
 module.exports = {
  Assessment,PostScore
 }
