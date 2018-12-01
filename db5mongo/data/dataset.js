
const alice = {
    _id: 123,
    username: "alice",
    password: "alice",
    firstName: "Alice",
    lastName: "Wonderland",
    gradYear: 2020,
    scholarship: 15000
};
const bob = {
    _id: 234,
    username: "bob",
    password: "bob",
    firstName: "Bob",
    lastName: "Hope",
    gradYear: 2021,
    scholarship: 12000
}

const question1 = {
    _id: 321,
    question: "Is the following schema valid?",
    points: 10,
    questionType: "TRUE_FALSE",
}
const question1TrueFalse = {
    isTrue: false
}

const question2 = {
    _id: 423,
    question: "DAO stands for Dynamic Access Object.",
    points: 10,
    questionType: "TRUE_FALSE",
}
const question2TrueFalse = {
    isTrue: false
}

const question3 = {
    _id: 543,
    question: "What does JPA stand for?",
    points: 10,
    questionType: "MULTIPLE_CHOICE",
}
const question3MultipleChoice = {
    choices: "Java Persistence API,Java Persisted Application,JavaScript Persistence API,JSON Persistent Associations",
    correct: 1
}
const question4 = {
    _id: 654,
    question: "What does ORM stand for?",
    points: 10,
    questionType: "MULTIPLE_CHOICE",
}
const question4MultipleChoice = {
    choices: "Object Relational Model,Object Relative Markup,Object Reflexive Model,Object Relational Mapping",
    correct: 4
}

const answer1 = {
    _id: 123,
    trueFalseAnswer: true,
    student: 123,
    question: 321
}

const answer2 = {
    _id: 234,
    trueFalseAnswer: false,
    student: 123,
    question: 423
}

const answer3 = {
    _id: 345,
    multipleChoiceAnswer: 1,
    student: 123,
    question: 543
}
const answer4 = {
    _id: 456,
    multipleChoiceAnswer: 2,
    student: 123,
    question: 654
}
const answer5 = {
    _id: 567,
    trueFalseAnswer: false,
    student: 234,
    question: 321
}

const answer6 = {
    _id: 678,
    trueFalseAnswer: true,
    student: 234,
    question: 423
}

const answer7 = {
    _id: 789,
    multipleChoiceAnswer: 3,
    student: 234,
    question: 543
}

const answer8 = {
    _id: 890,
    multipleChoiceAnswer: 4,
    student: 234,
    question: 654
}

const students = [alice, bob]
const questions = [question1, question2, question3, question4]
const trueFalseObjects = [question1TrueFalse, question2TrueFalse]
const multipleChoiceObjects = [question3MultipleChoice, question4MultipleChoice]
const answers = [answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8]

const fullDataSet = {students, question1, question2, question3, question4, question1TrueFalse, question2TrueFalse, question3MultipleChoice, question4MultipleChoice, answers}
module.exports = {fullDataSet};