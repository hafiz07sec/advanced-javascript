const number = [11, 91, 24, 87, 19]; 

const result = number.map(x => x*x); 
console.log(result); 

const bigger = number.filter(x => x > 70);
console.log(bigger);

const isThere = number.find(x => x > 70); 
console.log(isThere);