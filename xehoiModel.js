const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const XeHoiSchema = new Schema({
    Ten: String,
    Nam: Number,
    GiaBan: Number,
  });
module.exports = mongoose.model("xehois",XeHoiSchema);