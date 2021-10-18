


var newArray = [];

function reverse(arr){
    for( var i = arr.length - 1; i >= 0; i--){
        newArray.push(arr[i]);
    }
    return newArray;
}    

    var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); 