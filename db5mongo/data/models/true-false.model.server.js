const mongoose = require('mongoose');
const trueFalseSchema = require('./true-false.schema.server');
const trueFalseModel = mongoose.model('TureFalseModel',trueFalseSchema);
module.exports={trueFalseModel}