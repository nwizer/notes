function pushExample(arr, element){
    console.log("Original Array:", arr);

    arr.push(element);
    console.log("After push:", arr);

}
pushExample([1, 2, 3], 4);

function popExample(arr){
    console.log("Original Array:", arr);

    arr.pop();
    console.log("After pop:", arr);
}
popExample([1, 2, 3]);

const initialArray = [1,2,3];
initialArray.unshift(0);
initialArray.shift(0);
console.log(initialArray);

function concatExample(arr1, arr2){
    console.log("Original Arrays:", arr1, arr2);

    let arr3 = arr1.concat(arr2);
    console.log("After concat:", arr3);
}
concatExample([1,2,3], [4, 5, 6]);

function forEachExample(arr) {
    console.log("Original Array:", arr);

    arr.forEach(function(item, index){
        console.log(item, index);
    });
}
forEachExample([1, 2, 3]);

//callback
function logThing(str) {
    console.log(str);
}

// [1, 2, 3]
initialArray.forEach(logThing)






