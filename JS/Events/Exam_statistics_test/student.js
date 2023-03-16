// write a constructor function with two arguments that represent name and surname of a student but so both must start with a capital letter
// add to its prototype a method getStudentData that returns the name and surname of the student

function Student (name, surname) {
    if (name[0] !== name[0].toUpperCase() || surname[0] !== surname[0].toUpperCase()) {
        throw new Error ('Name and surname must start with a capital letter');
    }
    this.name = name;
    this.surname = surname;
}

Student.prototype.getStudentData = function () {
    return this.name + " " + this.surname;
}

// add user interaction code
// add event listeners to the form
// add event listeners to the list
// add event listeners to the buttons
// add event listeners to the inputs

var form = document.querySelector('form');
var list = document.querySelector('ul');
var passed = document.querySelector('#passed');
var failed = document.querySelector('#failed');
var inputName = document.querySelector('#name');
var inputSurname = document.querySelector('#surname');
var inputSubject = document.querySelector('#subject');
var inputGrade = document.querySelector('#grade');
var btnDelete = document.querySelector('#delete');
var btnUpdate = document.querySelector('#update');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    var student = new Student(inputName.value, inputSurname.value);
    var subject = new Subject(inputSubject.value);
    var exam = new Exam(subject, student, inputGrade.value);
    var li = document.createElement('li');
    li.textContent = exam.getExamInfo();
    li.classList.add(exam.hasPassed() ? 'passed' : 'failed');
    list.appendChild(li);
    inputName.value = '';
    inputSurname.value = '';
    inputSubject.value = '';
    inputGrade.value = '';
    updateStatistics();
});

list.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('selected');
    }
});

btnDelete.addEventListener('click', function () {
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (li) {
        li.remove();
    });
    updateStatistics();
});

btnUpdate.addEventListener('click', function () {
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (li) {
        li.classList.toggle('passed');
        li.classList.toggle('failed');
    });
    updateStatistics();
});

function updateStatistics() {
    var passedExams = document.querySelectorAll('.passed');
    var failedExams = document.querySelectorAll('.failed');
    passed.textContent = passedExams.length;
    failed.textContent = failedExams.length;
}






















