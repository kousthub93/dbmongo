const mongoose = require('mongoose');
const multipleChoiceSchema = require('./multiple-choice.schema.server');
const multipleChoiceModel = mongoose.model('multipleChoiceModel',multipleChoiceSchema);
module.exports={multipleChoiceModel}