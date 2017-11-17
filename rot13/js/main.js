/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */

function rot13(str) { 
  var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
  var newArr = [];
  var indexArr = [];
  var punctuation = [];

  for (var i = 0; i < str.length; i++) {
  	if (str[i] !== "!" && str[i] !== "." && str[i] !== "?") {
  		indexArr.push(alpha.indexOf(str[i]));
  	} else if (str[i] === "!" || str[i] === "." || str[i] === "?") {
  		punctuation.push(str[i]);
  	}	
  }
	for (i = 0; i < indexArr.length; i++) {
  	if (indexArr[i] !== -1) {
  		indexArr[i] = indexArr[i] + 13;
  		newArr.push(alpha[indexArr[i]]);
  	} else {
  		newArr.push(" ");
  	}
  }
  newArr.push(punctuation);
  return newArr.join('');
}


// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));
console.log(rot13("THIS IS A TEST MESSAGE"));
console.log(rot13("GUVF VF N GRFG ZRFFNTR"));
