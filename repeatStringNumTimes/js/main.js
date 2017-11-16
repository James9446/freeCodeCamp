// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
	var repeated = [];
	if (num >= 0) {
		for (var i = 0; i < num; i++) {
  		repeated.push(str);
  	}
  	str = repeated.join('');
	} else {
		str = ""
	}
  return str;
}

console.log(repeatStringNumTimes("abc", -3));
