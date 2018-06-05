

function LetterChanges(str) { 

  // code goes here
  let converted = str.replace(/[a-z]/gi, function (match) {
      return (match === 'z' || match === "Z")? 'a' : String.fromCharCode(match.charCodeAt() + 1)
  })
  let capitalized = converted.replace(/a|e|i|o|u/gi, function (match) {
      return match.toUpperCase();
  })
  
  return capitalized;
}