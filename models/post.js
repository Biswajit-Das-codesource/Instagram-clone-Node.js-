const mongoose = require("mongoose");

const dataschema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    para: {
      type: String,
    },
   createdby: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userdata" 
    },
  },
  { timestamps: true }
);

const datamodel = mongoose.model("data", dataschema);

module.exports = datamodel;
