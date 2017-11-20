// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr, arg1, arg2, arg3) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arg1 && arr[i] !== arg2 && arr[i] !== arg3) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);