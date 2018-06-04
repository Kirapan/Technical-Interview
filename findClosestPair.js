function findClosestPair(numbers, sum) {
  var result = Infinity;
  var hash = {};
  for (var i=0; i<numbers.length; i++) {
      var pair = sum - numbers[i]
      if(hash[pair.toString()] !== undefined) {
          result = Math.min(result, i-hash[pair.toString()])
      } else {
          hash[numbers[i]]=i;
      }      
  }
  if (result === Infinity) {
      return -1;
  } else {
      return result;
  }
}
