var name = prompt("Enter Your Name:");
var dob_d = prompt("Enter the Date of Birth Date (In DD Format):");
var dob_m = prompt("Enter the Date of Birth Month (In MM Format):");
var dob_y = prompt("Enter the Date of Birth Year (In yyyy Format):");
var p_date = new Date();
var p_hour = p_date.getHours();

if (p_hour > 5 && p_hour < 12)
{
	console.log("Hello "+name+" , Good Morning"); 
}else{
	if (p_hour > 12 && p_hour < 17)
	{
		console.log("Hello "+name+" , Good AfterNoon");
	}else{
		if (p_hour > 17 && p_hour < 20)
		{
			console.log("Hello "+name+" , Good Evening");
		}
		else{
			console.log("Hello "+name+" , Good Night");
			}
		}
	}
var dob = dob_d+"/"+dob_m+"/"+dob_y;
console.log("Your Date Of Birth is " +dob_d+"/"+dob_m+"/"+dob_y);

var nowyear = p_date.getFullYear();
var nowmonth = p_date.getMonth();
var nowday = p_date.getDate();

var age = nowyear - dob_y;
var age_month = nowmonth - dob_m;
var age_day = nowday - dob_d;
var age_hours = (age * 365 * 24)+(age_month * 30 * 24)+(age_day* 24);
var age_min = age_hours *60;
var age_sec = age_min *60;

if(age_month < 0 || (age_month == 0 && age_day <0)) {
            age = parseInt(age) - 1;
        }
//    window.alert(age);

console.log("You are "+age+" years, "+Math.abs(age_month)+" Month, "+ age_day+" Day, "+age_hours+" Hours, "+age_min+" Minutes and "+ age_sec+" Seconds old");

var next_dob_day = ((46*365)-(age*365)+(age_month*30)-age_day);
var next_dob_hour = (next_dob_day*24);
var next_dob_min = (next_dob_hour*60);
var next_dob_sec = (next_dob_min*60);

console.log("How much time left in your next birthday? "+next_dob_day+" days, "+next_dob_hour+" hours, "+next_dob_min+" minutes and "+next_dob_sec+" seconds")
console.log("happy Birth Day "+name+". Today is Your "+(age+1)+"th Birthday");
