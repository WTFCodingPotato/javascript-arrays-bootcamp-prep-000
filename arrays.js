chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(a, b) {
  return [b, ...a]
}
function destructivelyAddElementToBeginningOfArray(a,b) {
  a.unshift(b)
  return a
}
function addElementToEndOfArray(a,b) {
  return [...a,b]
}
function destructivelyAddElementToEndOfArray(a,b) {
  a.push(b)
  return a
}
function accessElementInArray(a, index) {
  return a[index]
}
<<<<<<< HEAD
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
function destructivelyRemoveElementFromBeginningOfArray(a) {
   a.shift()
   return a
}
function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop()
  return a
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
=======
function destructivelyAddElementToEndOfArray (a) {
  



  
>>>>>>> 042a592ce2d114b60a93d17229b269d46f0e4e4e

  


  

  
