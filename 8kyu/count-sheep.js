/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
*/
//solution
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(item => item === true).length // TODO May the force be with you
  }