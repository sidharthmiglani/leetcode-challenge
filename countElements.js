/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    var count =0;
    const unique_set = new Set(arr);
    const u_arr = [...unique_set];
    for(i=0;i<arr.length;i++){
        count+=u_arr.filter(x=> x == (arr[i]+1)).length;// This counts the number of time an element is occured 
    }
    return count;
};