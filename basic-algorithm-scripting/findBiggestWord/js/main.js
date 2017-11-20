
function findLongestWord(str) {
  str = str.split(' ');
  // Variable for largest number. Needs an opening value for comparison 
  var biggest = 0; 

  for (i = 0; i < str.length; i++) {
		// condition statement testing if the biggest variable needs it's value updated
		if (str[i].length> biggest) {
			biggest = str[i].length;
		}
  }
  return biggest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
