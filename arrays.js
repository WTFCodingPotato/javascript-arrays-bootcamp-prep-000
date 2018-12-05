chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(a, b) {
  var c = new Array();
  c = [...a, b]
  return c
}
function destructivelyAddElementToBeginningOfArray(a, b) {
  a = [...a, b]
}
