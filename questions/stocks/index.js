/** Stock Trading
 * 
 * Given an array of 'prices', find the transaction that will yield the greatest profits.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing 
 * a different day in the future to sell that stock.
 * 
 * @examples
 * stocks([8, 3, 6, 1, 6, 4, 7]) -> 6
 * stocks([1, 8, 3, 4]) -> 7
 * stocks([2, 9, 18, 9, 2]) ->  16
 */

// Use pointers when trying to find the min or max in a question
// Use while loop when using pointers

const stocks = (prices) => {
   let l = 0
   let r = 1
   let maxProfit = 0

   while (r < prices.length) {
    let profit = prices[r] - prices[l]

    if (profit > maxProfit) {
        maxProfit = profit
    }
    else if  (profit < 0) {
        l = r
    }
    
    r++
   }
   return maxProfit
}


//DO NOT EDIT BELOW THIS LINE
module.exports = stocks;
