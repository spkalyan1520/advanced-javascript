var Cakes = {
    count : 0

};
Cakes.sell = function(){
    var cake = this;
    var make_new = function (){
        this.count ++;
    };
    make_new();
};
Cakes.sell();
console.log(Cakes.count);  // 1
Cakes.sell();
console.log(Cakes.count);  // 2


 "P 130.56, C, P 12.37 , P 6.00, R 75.53, P 1.32"

let transactionHistory = "P 130.56, C, P 12.37 , P 6.00, R 75.53, P 1.32";

console.log(calPurchases(transactionHistory));


function calPurchases(history){
    let total = 0;
    let numberArrays = history.split(',');
    numberArrays.forEach(function(item){
            console.log(item);
            //console.log(parseInt(item.join));
    });

}