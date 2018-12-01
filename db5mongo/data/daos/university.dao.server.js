
const studentModel = require("../models/student.model.server").studentModel;
const questionModel = require("../models/question.model.server").questionModel;
const answerModel = require("../models/answer.model.server").answerModel;
const dataSet = require('../../data/dataset').fullDataSet;
var trueFalseSchema = require("../models/true-false.schema.server");
var multipleChoice = require("../models/multiple-choice.schema.server");

truncateDatabase =()=>{
    studentModel.deleteMany({});
}
createStudent = student => studentModel.create(student);
createQuestion = (question, value) => {

    if(question.questionType == "TRUE_FALSE"){
        trueFalseSchema.isTrue = value.isTrue;
        question.trueFalse = trueFalseSchema;
        questionModel.create(question);
    }
    else{
        multipleChoice.choices = value.choices;
        multipleChoice.correct = value.correct;
        question.multipleChoice = multipleChoice;
        questionModel.create(question);
    }
}

answerQuestion = (answer) => {
    answerModel.create(answer);
}
findAllStudents = () => studentModel.find();
findStudentById = studentId => studentModel.findById(studentId);
updateStudent = (studentId, student) => studentModel.update({_id: studentId}, {$set: student});
deleteStudent = studentId => studentModel.remove({_id: studentId});

const studentListCreationPromises =  (studentList) => {
    studentList.map(student => {
        return createStudent(student);
    })
};

const answersCreationPromises =  (studentList) => {
    studentList.map(student => {
        return answerQuestion(student);
    })
};

populateDatabase = () => {
   /* const promise1 = studentListCreationPromises(dataSet.students);
    const promise2 = createQuestion(dataSet.question1,dataSet.question1TrueFalse);
    const promise3 = createQuestion(dataSet.question2, dataSet.question2TrueFalse);
    const promise4 = createQuestion(dataSet.question3, dataSet.question3MultipleChoice);
    const promise5 = createQuestion(dataSet.question4, dataSet.question4MultipleChoice);
    const promises = [promise2, promise3, promise4, promise5]
    const finalPromises = [promise1, ...promises];
    return Promise.all(finalPromises)
        .then(() => {
            console.log("inside")
            answerQuestion(dataSet.answer1)
        })
        .then(() => {
            console.log("all successfull");
        })
        .catch(() => {
            console.log("error");
        })*/
    const promise = answerQuestion(dataSet.answer1)
    return promise
};
module.exports = {
    createStudent, findAllStudents, findStudentById, updateStudent, deleteStudent, populateDatabase, truncateDatabase };