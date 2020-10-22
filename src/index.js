module.exports = function check(str, bracketsConfig) {
  let except = [];
  bracketsConfig = bracketsConfig.flat().join("");
  
  for(let i=0; i < bracketsConfig.length; i=i+2) {
    if(bracketsConfig[i] == bracketsConfig[i+1]) {
      except.push(i);
    }
  }
  let storage = [];
  for(let i = 0; i < str.length; i++) {
    let indexOfBracket = bracketsConfig.indexOf(str[i]);    
    if(except.includes(indexOfBracket) && indexOfBracket+1 === storage[storage.length-1]) {
      storage.pop();
      continue;
    }  
    if(indexOfBracket%2 === 0) storage.push(indexOfBracket+1);
    else {
      if(storage.pop() != bracketsConfig.indexOf(str[i]))  {
        return false;
    } 
  }
  }
  return storage.length === 0 ? true : false;
}


