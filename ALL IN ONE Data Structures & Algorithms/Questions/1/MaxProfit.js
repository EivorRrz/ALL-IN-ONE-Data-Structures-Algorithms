var MaxProfit = function (prices) {
    let MaxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            MaxProfit += prices[i] - prices[i - 1];
        }
    }
    return MaxProfit;
}

//2nd code
var MaxProfit1 = function (prices) {
    let n = prices.length;
    if (n === 0) return 0;


    let buy = prices[0];
    let MaxProfit = 0;

    for (let i = 1; i < n; i++) {
        if (prices[i] > buy) {
            buy = prices[i] - bug;
        } else if (prices[i] - buy > profit) {
            profit = prices[i] - buy;
        }
    }
    return MaxProfit;
}