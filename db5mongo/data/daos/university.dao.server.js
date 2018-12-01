
const studentModel = require("../models/student.model.server").studentModel;
const questionModel = require("../models/question.model.server").questionModel;
const answerModel = require("../models/answer.model.server").answerModel;
const dataSet = require('../../data/dataset').fullDataSet;
var trueFalseSchema = require("../models/true-false.schema.server");
var multipleChoice = require("../models/multiple-choice.schema.server");

truncateDatabase =()=> {
    const delete1 = answerModel.deleteMany({});
    const delete2 = studentModel.deleteMany({});
    const delete3 = questionModel.deleteMany({});
    const deletePromises = [delete1, delete2, delete3]
    return Promise.all(deletePromises)
}

createStudent = student => studentModel.create(student);
createQuestion = (question, value) => {
    console.log("inside create questions")
    if(question.questionType == "TRUE_FALSE"){
        trueFalseSchema.isTrue = value.isTrue;
        question.trueFalse = trueFalseSchema;
       return questionModel.create(question);
    }
    else{
        multipleChoice.choices = value.choices;
        multipleChoice.correct = value.correct;
        question.multipleChoice = multipleChoice;
       return questionModel.create(question);
    }
}

findAllStudents = () => studentModel.find();
findStudentById = studentId => {
    return studentModel.findById(studentId);
}
findQuestionById = questionId => {
   return questionModel.findById(questionId);
}

findAllQuestions = () => questionModel.find();
findAllAnswers = () => answerModel.find();
answerQuestion = (answer) => {
    findStudentById(answer.student)
        .then((student) => {
            if(student != null){
                findQuestionById(answer.question)
                    .then((question) => {
                        if(question != null){
                            answerModel.create(answer)
                        }
                        else{
                            console.log("Question of Id " + answer.question+" not found!")
                        }
                    })
            }
            else{
                console.log("Student of Id " + answer.student + " not found!")
            }
        })
        .catch((error) => {
            console.log(error)
        })
}
updateStudent = (studentId, student) => studentModel.update({_id: studentId}, {$set: student});
deleteStudent = studentId => studentModel.remove({_id: studentId});
deleteQuestion = questionId => questionModel.remove({_id: questionId});
deleteAnswer = answerId => answerModel.remove({_id: answerId});

const studentListCreationPromises =  (studentList) => {
    studentList.map(student => {
        return createStudent(student);
    })
};

const answersCreationPromises =  (answers) => {
    answers.map(answer => {
        return answerQuestion(answer);
    })
};

populateDatabase = () => {
    const promise1 = studentListCreationPromises(dataSet.students)

    const promise2 =
        createQuestion(dataSet.question1,dataSet.question1TrueFalse);

    const promise3 =
        createQuestion(dataSet.question2, dataSet.question2TrueFalse);

    const promise4 =
        createQuestion(dataSet.question3, dataSet.question3MultipleChoice);

    const promise5 =
        createQuestion(dataSet.question4, dataSet.question4MultipleChoice);

    const promises = [promise2, promise3, promise4, promise5]
    const finalPromises = [promise1, ...promises];
    return Promise.all(finalPromises)
        .then((result) => {
            console.log("all questions and answers created")
            answersCreationPromises(dataSet.answers)
        })
};
module.exports = {
    createStudent, findAllStudents, findStudentById, updateStudent, deleteStudent, populateDatabase, truncateDatabase };