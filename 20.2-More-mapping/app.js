var myNumbers = [23,234,345,4356234,243,43,56,2];

// your code here
function myFunction(num) {
    return num * 3;
}

var newArray = myNumbers.map(function(value) {
    return myFunction(value);
});

console.log(newArray);