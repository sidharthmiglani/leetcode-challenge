/**
 * @param {number[]} stones
 * @return {number}
 */

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