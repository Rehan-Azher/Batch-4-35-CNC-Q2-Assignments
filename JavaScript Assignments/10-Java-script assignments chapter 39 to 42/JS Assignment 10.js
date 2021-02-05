var course_1 = prompt("Enter the marks of Cousre 1: ");
var course_2 = prompt("Enter the marks of Cousre 2: ");
var course_3 = prompt("Enter the marks of Cousre 3: ");
var course_4 = prompt("Enter the marks of Cousre 4: ");
var course_5 = prompt("Enter the marks of Cousre 5: ");

var total_marks = 500;
var sum = parseInt(course_1)+parseInt(course_2)+parseInt(course_3)+parseInt(course_4)+parseInt(course_5);
alert("You get the "+sum+" Marks");
var percentage = (sum*100)/total_marks;

alert("Marks Percentage is "+percentage);

var grade;
if (percentage > 90 && percentage < 100 )
{
  grade = "A+";
}else{
	if (percentage > 75 && percentage < 90 )
		{
		grade = "A";
		}
	else{
	if (percentage > 60 && percentage < 75 )
		{
		grade = "B";
		}
	else{
	if (percentage > 45 && percentage < 60 )
		{
		grade = "C";
		}
	else{
	if (percentage > 30 && percentage < 45 )
		{
		grade = "D";
		}
	else{
			grade = "F";
		}
}}}}
	
switch (grade)
{
	case "A+":
		alert("You got A+ Grade");
		break;
	case "A":
		alert("You got A Grade");
		break;
	case "B":
		alert("You got B Grade");
		break;
	case "C":
		alert("You got C Grade");
		break;
	case "D":
		alert("You got D Grade");
		break;
	case "F":
		alert("You got F Grade");
		break;
}
