var number = prompt("Enter the Decimal Number:");
	number_2 = Math.ceil(number);

var text_1 = "This is my Dummy Text";
var text_2 = text_1.slice(0,number_2);

window.alert(text_2);

var reverse_text = "";

for(var c =number_2 - 1; c >= 0; c--)
{
	reverse_text += text_2[c];
}

window.alert(reverse_text);
