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

// const binarySearch = (array, target) => {
//
//   let startIndex = 0;
//   let endIndex = (array.length - 1);
//
//   while(startIndex <= endIndex){
//
//     let middleIndex = Math.floor((startIndex + endIndex) / 2);
//
//     if(target === array[middleIndex]){
//     return console.log('the number ' + target + 'was found at position' + middleIndex);
//     }
//     else if(target < array[middleIndex]){
//       endIndex = middleIndex - 1;
//     }
//     else if(target > array[middleIndex]){
//       startIndex = middleIndex + 1
//     }
//
//   }
//   console.log('your number was not found in this array');
// };
//
// let myArray = [0,1,2,3,4,5,6,7,8];
//
//
// binarySearch(myArray,6);

//what happens when you overwrite

// let myArray=[1,2,3,5];
//
// myArray.splice(1,0,66);

// answer for relative sort Array


// var relativeSortArray = function(arr1, arr2) {
//
//   let positionArray=[];
//   let newArray=[];
//   let notInArray=[];
//   let frequencyOutput=[];
//
// //this edits deductedArr2 so it only contains values not present in arr2
//
//    function notInArray2(){
//         let deductedArr2 = arr1;
//           for(var i=0;i<deductedArr2.length;i++){
//             for(var x=0;x<arr2.length;x++){
//                 if(deductedArr2[i] === arr2[x]){
//                     delete deductedArr2[i]
//                 }
//             }
//         }
//
//      let preSort = deductedArr2.filter(function (el) {return el !=null});
//        notInArray = preSort.sort((a,b) => a-b);
//
//    }
//
//
//
//    //these are instructions on how to re-assemble the array
//     for(var i=0; i < arr2.length;i++){
//         positionArray.push({value:arr2[i], index:arr2.indexOf(arr2[i])});
//     }
//
// //frequency counter now works
//   function frequencyCounter(){
//     for(var u = 0; u < arr2.length; u++){
//         var counter = 0;
//         for (var b=0; b < arr1.length;b++){
//
//             //it never hits this condition for some reason
//                if(arr2[u] == arr1[b]){
//                 counter+=1;
//
//             }
//
//         }
//         positionArray[u].frequency = counter;
//     }
//   }
//
//
//
//
// function assembleFrequency(){
//     commonArray=[];
//     for(var c = 0;c<positionArray.length;c++){
//         for(var d = 0;d<positionArray[c].frequency;d++){
//           commonArray.push(positionArray[c].value)
//         }
//     }
//     frequencyOutput=commonArray;
// }
//
//     frequencyCounter();
//     notInArray2();
//     assembleFrequency();
//
//     return frequencyOutput.concat(notInArray);
//
// };

//basic while loop
// let i =0;
// let text = "";
//
// while (i < 10) {
//   text = "The number is " + i;
//   console.log(text);
//   i++;
// }

//recursive function that counts down from a number to zero

// let recurse = (entryNumber) =>{
//   console.log(entryNumber);
//   let nextNumber = entryNumber - 1;
//   if(nextNumber > 0){
//     recurse(nextNumber);
//   }
// }
//
// recurse(40);


//Intersection of 2 arrays leet code problem:


var intersection = function(nums1, nums2) {

    let overlapWithDupes = [];
    let finalOutput = [];

let commonIntegers = () =>{
    for(var i = 0; i<nums1.length;i++){
        for(var j=0; j<nums2.length;j++){
            if(nums1[i]===nums2[j]){
                overlapWithDupes.push(nums2[j]);

            }
        }
    }
}

let removeDupes = () =>{
    for(var i=0;i<overlapWithDupes.length;i++){
        for(var j=0;j<overlapWithDupes.length;j++){
            if(overlapWithDupes[i]==overlapWithDupes[j] && i != j){

                delete overlapWithDupes[j]
                }

        }
        if (overlapWithDupes[i] != undefined){
            finalOutput.push(overlapWithDupes[i]);
        }
    }
}

   commonIntegers();
    removeDupes();
    return finalOutput

};
