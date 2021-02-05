var num_1 = prompt("Enter First Number: ");
var num_2 = prompt("Enter Second Number: ");
var opr = prompt("Enter oprator: ");
var ans;
if (opr=="+") {
    ans = parseInt(num_1) + parseInt(num_2);
} else if (opr=="-") {
    ans = num_1 - num_2;
} else if (opr=="*") {
    ans = num_1 * num_2;
} else if (opr=="/") {
    ans = num_1 / num_2;
} else {
    ans = num_1 % num_2;
}

window.alert(num_1 +" "+ opr +" "+ num_2 +" = " + ans);


var a = prompt("Enter Number in Eng: ");
var b = prompt("Enter Number in Urdu: ");
var c = prompt("Enter Number in Islamiat: ");
var d = prompt("Enter Number in Pakistan Studies: ");
var e = prompt("Enter Number in Maths: ");

var sum = parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e);
var t_marks = 500;
var per = (sum/t_marks)*100;

window.alert("Percentage of Marks: "+per);