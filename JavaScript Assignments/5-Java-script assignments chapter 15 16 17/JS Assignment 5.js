var courses = [];

var course1 = prompt("Course 1: ");
	courses.push(course1);
var course2 = prompt("Course 2: ");
	courses.push(course2);
var course3 = prompt("Course 3: ");
	courses.push(course3);
var course4 = prompt("Course 4: ");
	courses.push(course4);
var course5 = prompt("Course 5: ");
	courses.push(course5);

window.alert(courses);

prompt("Course 1: ", course1);
prompt("Course 2: ", course2);
prompt("Course 3: ", course3);
prompt("Course 4: ", course4);
prompt("Course 5: ", course5);

var course_index = prompt("Enter the course No you want to change: ");
courses.splice(course_index - 1, 1, prompt("Enter the New course you want: "));

window.alert(courses);