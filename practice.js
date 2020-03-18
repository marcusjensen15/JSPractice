// console.log('bacon')


// let myArray = ['a', ['b', 'c','x','j'], 'd', ['e', 'f','t','y','h']];
//
// let myResult = [];

//if a position in myArray is more than one entry, push every entry aside from the first entry into the new array.

// myFunction = (input) => {
//
// for(var i = 0; i < input.length; i++){
//   if (input[i].length > 1){
//     for (var j = 1; j < input[i].length; j++){
//       myResult.push(input[i][j]);
//     }
//   };
// }
// return myResult
// };
// console.log(myFunction(myArray));

//
// let myVar = 0;
//
// while (myVar < 9){
//
//
//   console.log('bacon' + myVar);
//   myVar += 1
// }

//this is a correct binary search. make sure to include the return statement on the === equivelency, otherwise it will be an infinant loop

const binarySearch = (array, target) => {

  let startIndex = 0;
  let endIndex = (array.length - 1);

  while(startIndex <= endIndex){

    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if(target === array[middleIndex]){
    return console.log('the number ' + target + 'was found at position' + middleIndex);
    }
    else if(target < array[middleIndex]){
      endIndex = middleIndex - 1;
    }
    else if(target > array[middleIndex]){
      startIndex = middleIndex + 1
    }

  }
  console.log('your number was not found in this array');
};

let myArray = [0,1,2,3,4,5,6,7,8];


binarySearch(myArray,6);
