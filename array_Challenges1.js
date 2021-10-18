

function alwaysHungry(arr){
    var count = 0;

    for( var i = 0; i < arr.length; i++){
        if( arr[i] == "food"){
            console.log("yummy");
            count++;
        }
    }

    if( count == 0){
        console.log("I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4,1,5,7,2]);

