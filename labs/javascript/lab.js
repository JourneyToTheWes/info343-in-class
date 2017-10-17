// Put your JavaScript lab code here!
var preference = "I like javascript more than I like to party";
preference = preference.substr(preference.indexOf("I like to party"), preference.length - 1);
console.log(preference);

var school = "I love Washington State University";
school = school.replace("Washington State University", "University of Washington");
console.log(school);

function sumUpTo(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function vowelCount(str) {
    var arr = str.match(/[aeiou]/gi);
    console.log(arr);
    if (arr === null) {
        return 0;
    } else {
        return arr.length;
    }
}
