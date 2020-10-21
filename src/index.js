module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.flat().join("");
  let storage = [];
  for(let i = 0; i < str.length; i++) {
    if(str[i] == '|' && str[storage[storage.length-1]] == '|') {
      storage.pop();
      continue;
    }
    let indexOfBracket = bracketsConfig.indexOf(str[i]);
    if(indexOfBracket%2 === 0) storage.push(indexOfBracket+1);
    else {
      if(storage.pop() != bracketsConfig.indexOf(str[i]))  {
        return false;
    } 
  }
  }
  return storage.length === 0 ? true : false;
}


