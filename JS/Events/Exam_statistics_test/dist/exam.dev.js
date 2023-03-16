"use strict";

// In exam.js file: 
// write a constructor function with three arguments that represent a subject, a student, and a grade. 
// add to its prototype a method getExamInfo that returns the name of the subject and the name and surname of the student.
// add to its prototype a method hasPassed that checks if the student has passed the exam. A student has passed the exam if their grade is greater than 5.
function Exam(subject, student, grade) {
  this.subject = subject;
  this.student = student;
  this.grade = grade;
}

Exam.prototype.getExamInfo = function () {
  return this.subject.getSubjectName() + " " + this.student.getStudentData();
};

Exam.prototype.hasPassed = function () {
  return this.grade > 5;
};