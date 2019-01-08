var username = prompt('Enter username');

var pattern = new RegExp('[0-9]');
var res = pattern.test(username);

var result = '';

if (res) {
    for (var i = 0; i < username.length; i++) {
        if (i % 2 == 0) {
            result += username.charAt(i).toLowerCase();
        } else{
        result += username.charAt(i).toUpperCase();
        }
    }
} else {
    result = username.split("").reverse().join("");
}

document.getElementById("text").innerHTML = result;