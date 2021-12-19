var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	//add your code here and return the new value. 1 celsius = 33,8 fahrenheit
	return value * 9/5 + 32;
});

console.log(arrayOfFahrenheitValues);