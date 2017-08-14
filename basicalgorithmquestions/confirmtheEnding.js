function confirmEnding(str, target) {
 var extractedString = str.substr(str.length-target.length);
 return (extractedString === target) ? true : false;


  return str.substr(-target.length) === target;


}

console.log(confirmEnding("Bastian", "qan"));

