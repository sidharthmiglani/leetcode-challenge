/**
 * @param {number[]} stones
 * @return {number}
 */

//ITERATIVE METHOD
var lastStoneWeight = function(stones) {
    while(stones.length >1){
        stones.sort((a, b) => a - b);// sorts number array
        let x = stones.pop();
        let y = stones.pop();
        if(x !== y){
            stones.push(Math.abs(x-y));
        }
    }
    if (stones.length == 1){
        return stones[0];
    }
    else if(stones.length == 0){
        return 0;
    }
};

 // RECURSIVE METHOD
var lastStoneWeight = function(stones) {
    if (stones.length == 1){
        return stones[0];
    }
    if(stones.length ==2){
        return Math.abs(stones[0]-stones[1]);
    }
    stones = stones.sort();
    var x = stones.pop();
    var y = stones.pop();
    if(x==y){
        lastStoneWeight(stones);
        }
    else{
        stones = stones.push(Math.abs(x-y));
        lastStoneWeight(stones);
    }  
};