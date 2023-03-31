function hasTargetSum(array, target) {
  
    // create an empty set to store the complement values
    const complements = new Set();
    
    // iterate over the array
    for (let num of array) {
      // check if the complement value is in the set
      if (complements.has(num)) {
        return true;
      }
      // add the complement value to the set
      complements.add(target - num);
    }
    
    // if no pair adds up to the target, return false
    return false;
  }











/* 
  O(n) Big O time complexity for the function
*/

/* 
  create an empty set to store the complement values
  initialize an empty Set called complements
  iterate over the array
  check if the complement value is in the set
  if the complement value is in the set, return true
  add the complement value to the set
  if no pair adds up to the target, return false
*/


/*
if the complement value is in the set, return true
if no pair adds up to the target, return false
 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));


  console.log("Expecting: true");
  console.log("=>", hasTargetSum([8, 28, 4, 3, 10], 32));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([7, 3, 2], 20));
}

module.exports = hasTargetSum;
