/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var sortAlphabets = function(text) {
    return text.split('').sort().join('');
};
    let sorted_arr = [];
    for(var i in strs){
        sorted_arr.push(sortAlphabets(strs[i]));
    }
    var count = {};
    sorted_arr.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    var final= new Array();
    var row=0;
    for (var i in  count){
        var col =0;
        final[row]=new Array();
        for(var j in strs){
            if(i == sortAlphabets(strs[j])){
                final[row][col]=strs[j];
                col++;
            }
        }
        row++;
    }
    return final;
};