// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


function mutation(arr) {
	arr[0] = arr[0].toLowerCase();
	arr[1] = arr[1].toLowerCase();
	arr[0] = arr[0].split('').sort();
	arr[1] = arr[1].split('').sort();
	// console.log(arr[0]);
	// console.log(arr[1]);

	// These sets of for loops are for removing any duplicate letters
	for (var i = 0; i < arr[0].length; i++) {
		if (arr[0][i] === arr[0][i+1]) {
			arr[0].splice(i, 1);
		}
	}
	for (i = 0; i < arr[1].length; i++) {
		if (arr[1][i] === arr[1][i+1]) {
			arr[1].splice(i, 1);
		}
	}
		for (i = 0; i < arr[0].length; i++) {
		if (arr[0][i] === arr[0][i+1]) {
			arr[0].splice(i, 1);
		}
	}
	for (i = 0; i < arr[1].length; i++) {
		if (arr[1][i] === arr[1][i+1]) {
			arr[1].splice(i, 1);
		}
	}
	// console.log(arr[0]);
	// console.log(arr[1]);
	var counter = 0;
	for (i = 0; i < arr[0].length; i++) {
		for (var j = 0; j < arr[1].length; j++) {
			if (arr[1][j] === arr[0][i]) {
				counter++;
			}
		}
	}
	// console.log(counter);
	if (counter >= arr[1].length) {
		return true;
	} else {
		return false;
	}
}

// Not the most elegenat approach but it works

console.log(mutation(["hello", "lllhe"]));
console.log(mutation(["voodoo", "no"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["Mary", "Aarmy"]));
