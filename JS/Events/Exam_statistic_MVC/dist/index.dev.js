"use strict";

$(document).ready(function () {
  var passed = [];
  var failed = [];
  var passedCount = 0;
  var failedCount = 0;
  var passedPercentage = 0;
  var failedPercentage = 0;
  var undo = [];

  function Subject(subjectName) {
    this.subjectName = subjectName;

    this.getSubjectName = function () {
      return this.subjectName;
    };
  }

  function Student(name, surname) {
    this.name = name;
    this.surname = surname;

    if (this.name[0] !== this.name[0].toUpperCase() || this.surname[0] !== this.surname[0].toUpperCase()) {
      throw new Error("Student name and surname has to start with the capital letter");
    }

    this.getStudentData = function () {
      return this.name + " " + this.surname;
    };
  }

  function Exam(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;

    this.getExamInfo = function () {
      return this.subject.getSubjectName() + " " + this.student.getStudentData();
    };

    this.hasPassed = function () {
      if (this.grade > 5) {
        return true;
      } else {
        return false;
      }
    };
  }

  function collectData() {
    var subject = new Subject($("#subject").val());
    var student = new Student($("#student").val().split(" ")[0], $("#student").val().split(" ")[1]);
    var grade = $("#grade").val();
    var exam = new Exam(subject, student, grade);
    return exam;
  }

  function validateData(exam) {
    if (exam.subject.getSubjectName() == "" || exam.student.getStudentData() == "" || exam.grade == "") {
      return false;
    } else {
      return true;
    }
  }

  function updateList(exam) {
    if (exam.hasPassed()) {
      passed.push(exam);
    } else {
      failed.push(exam);
    }
  }

  function updateStatistics() {
    passedCount = passed.length;
    failedCount = failed.length;
    passedPercentage = Math.round(passedCount / (passedCount + failedCount) * 100);
    failedPercentage = Math.round(failedCount / (passedCount + failedCount) * 100);
    $("#passed").html(passedCount + " (" + passedPercentage + "%)");
    $("#failed").html(failedCount + " (" + failedPercentage + "%)");
  }

  function updateTable() {
    $("#passedTable").html("");
    $("#failedTable").html("");

    for (var i = 0; i < passed.length; i++) {
      $("#passedTable").append("<tr><td>" + passed[i].subject.getSubjectName() + "</td><td>" + passed[i].student.getStudentData() + "</td><td>" + passed[i].grade + "</td></tr>");
    }

    for (var i = 0; i < failed.length; i++) {
      $("#failedTable").append("<tr><td>" + failed[i].subject.getSubjectName() + "</td><td>" + failed[i].student.getStudentData() + "</td><td>" + failed[i].grade + "</td></tr>");
    }
  }

  $("#add").click(function () {
    var exam = collectData();

    if (validateData(exam)) {
      updateList(exam);
      updateStatistics();
      updateTable();
      undo.push(exam);
    } else {
      alert("Please fill out all fields!");
    }
  });
  $("#clear").click(function () {
    passed = [];
    failed = [];
    passedCount = 0;
    failedCount = 0;
    passedPercentage = 0;
    failedPercentage = 0;
    undo = [];
    updateStatistics();
    updateTable();
  });
  $("#undo").click(function () {
    if (undo.length > 0) {
      var exam = undo.pop();

      if (exam.hasPassed()) {
        passed.pop();
      } else {
        failed.pop();
      }

      updateStatistics();
      updateTable();
    }
  });
});