/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    var buy=-1;
    var sell=-1;
    var profit=0;
    
    for(i=0;i<prices.length-1;i++){
        
        if(prices[i]<prices[i+1]){
            if(buy == -1 && sell == -1){
                buy = prices[i];
            }
            if(i == prices.length-2 && sell == -1){
                profit += (prices[i+1]-buy);
            }
        }
        else if(prices[i]>prices[i+1]){
            if(buy != -1 && sell == -1){
                sell = prices[i];
                profit+= (sell-buy);
                buy = -1;
                sell = -1;     
            }
        }
        else if(prices[i] == prices[i+1]){
            if( i == prices.length-2 && buy != -1){
                if(sell == -1){
                    profit +=(prices[i+1]-buy);
                }
            }
        }
    }
    return profit;  
};