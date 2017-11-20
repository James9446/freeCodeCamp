
function titleCase(str) {
	var finalStr = [];
	str = str.split(' ');
	for (var i = 0; i < str.length; i++) {
		// str[i] = str[i].toUpperCase();
		var newStr = str[i];
		// console.log("str[i]  " + newStr);
		newStr = newStr.toLowerCase();
		newStr = newStr.split('');
		// console.log("split  " + newStr);
		newStr[0] = newStr[0].toUpperCase();
		// console.log("upper  " + newStr);
		newStr = newStr.join('');
		// console.log("join  " + newStr);
		finalStr.push(newStr);
	}
	finalStr = finalStr.join(' ');
  return finalStr;
}
// console.log(newStr);
console.log(titleCase("I'm a little tea pot"));