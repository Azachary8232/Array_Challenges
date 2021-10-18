


function fibonacciArray(n){
    var fibArr = [0,1];
    
    for( i = 2; i < n; i++){
    
        var sum = fibArr[ fibArr.length - 1] + fibArr [ fibArr.length - 2];
    
        fibArr.push(sum);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result);
