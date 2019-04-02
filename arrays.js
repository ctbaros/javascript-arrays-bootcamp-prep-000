var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"] ;

function addElementToBeginningOfArray(array, element) {
  return [element, ... array] ;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
   return [...array, element]
 }
 
 function destructivelAddElementToEndOfArray(array, element) {
   array.push(element)
   return array
 }
 
function accessElementInArray(array, index) {
   return array[index]
 }
 
function destructivelyRemoveElementFromBeginningOfArray(array) {
   array.shift()
   array
 }
 
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
    
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}

function removeElementFromBeginningOfArray (array) {
  return array.slice(1)
}
