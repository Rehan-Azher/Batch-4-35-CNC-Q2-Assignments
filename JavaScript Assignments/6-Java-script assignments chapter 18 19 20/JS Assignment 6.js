var courses = [];
var course;
var c;

for(c=0;c<=4;c++)
{
	course = prompt("Enter the Name of 5 Courses:");
	courses.push(course);
}

window.alert(courses);


for(c=0;c<=4;c++)
{
	prompt("Course are: ", courses[c]);
}	

var course_index = prompt("Enter the course No you want to change: ");
courses.splice(course_index - 1, 1, prompt("Enter the New course you want: "));

window.alert(courses);