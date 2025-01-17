const makeChange = (c) => {
  // your name here
  const obj = {
      "q" : 25,
      "d": 10,
      "n": 5,
      "p": 1,
  };
  
  let result = {
    "q": 0,
    "d": 0,
    "n": 0,
    "p": 0,
  };
  
  
  let keys = Object.keys(obj);
  for(const key of keys) {
    while(c>=obj[key]){
      result[key]+=1;
      c-=obj[key]
    }
  }
  return result;
}

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
