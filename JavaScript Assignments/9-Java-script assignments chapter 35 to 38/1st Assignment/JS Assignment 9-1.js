var str = prompt("Enter the string of your own Choice: ");
var words = str.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

var res = words.join(" ");

console.log(res);
