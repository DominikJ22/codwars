/*Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/
// complete the function
function solution(string) {
    let splitStr = string.split("")
    let newStr = string.split("")
    let capStr = string.toUpperCase().split("")
    
    for(let i = string.length - 1; i>=0; i--){
      if(splitStr[i] === capStr[i]){
        newStr.splice(i, 0,' ')
      }
    }
  return newStr.join("")
}
console.log('camelCasing: ', solution('camelCasing'));
console.log('camelCasingTest: ', solution('camelCasingTest'));