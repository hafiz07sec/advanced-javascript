 //falsy --> false, 0, "", null, NaN
 //truthy --> '0', ' ', []

 let name = 0; 

 if (name || name == 0 ) {
     console.log("Truly ")
 }

 else {
     console.log("falsy ");
 } 