
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
	var total = 0;
	arr.sort(function(a, b) {
  	return a - b;
	});
	var start = arr[0];
	var end = arr[1];
	while (start <= end) {
		total += start;
		start++;
	}
  return total;
}

console.log(sumAll([1, 4]));
