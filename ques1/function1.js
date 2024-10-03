function lowerCaseWords(array){
   var p1= new Promise((resolve,reject)=> {
          
    if (!Array.isArray(array)) {
        reject("Input must be an array");
        return;
    }
    
    const filteredArray = array.filter(item => typeof item === "string")
                               .map(word => word.toLowerCase());
    
    resolve(filteredArray);

   }      
   
   )
   
return p1;
}

// USAGE 

const mixedArray = [1, "HELLO", 2, "WORLD", "INDER"];

lowerCaseWords(mixedArray)
    .then(result => {
        console.log(result);  // Output: ['hello', 'world', 'inder']
    })
    .catch(error => {
        console.error(error);
    });