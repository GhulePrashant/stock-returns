const purchase = document.querySelector("#purchase-price");
const quantity = document.querySelector("#quantity");
const selling = document.querySelector("#selling-price");
const chechBtn = document.querySelector("#check");
const rightDiv = document.querySelector(".right");
const output = document.querySelector(".result");

chechBtn.addEventListener('click', ()=>{
    let purchasePrice = Number(purchase.value);
    let quantityOfStocks = Number(quantity.value);
    let sellingPrice = Number(selling.value);

    if(validateValues(purchasePrice, quantityOfStocks, sellingPrice)){
        calculateReturns(purchasePrice, quantityOfStocks, sellingPrice);
    }else{
        output.style.backgroundColor = "red";
        output.textContent = "Enter positive values."
    }
});

function validateValues(purchasePrice, quantityOfStocks, sellingPrice){
    if(purchasePrice>0 && quantityOfStocks>0 && sellingPrice>0){
        return true;
    }else{
        return false;
    }
}

function calculateReturns(purchasePrice, quantityOfStocks, sellingPrice){
    let profit=0; 
    let loss=0;
    let profitPercent=0;
    let lossPercent=0;
    
    if(sellingPrice > purchasePrice){
        profit = (sellingPrice - purchasePrice) * quantityOfStocks;
        profitPercent = Math.round((profit)/quantityOfStocks);
        output.textContent = `You have made profit of total ${profit} rupees.\nYou earned ${profitPercent}%`;
        rightDiv.style.backgroundColor = "green";
    }
    else if(purchasePrice > sellingPrice){
        loss = (purchasePrice - sellingPrice) * quantityOfStocks;
        lossPercent = Math.round((loss)/quantityOfStocks);

        if(lossPercent >= 50){
            rightDiv.style.backgroundColor = "red";
            output.textContent = `You have made a huge loss of total ${loss} rupees.\nYou lost ${lossPercent}%. \n\nTip: You need to learn some trading first.`;
        }else{
            rightDiv.style.backgroundColor = "red";
            output.textContent = `You have made a loss of total ${loss} rupees.\nYou lost ${lossPercent}%.`
        }
    }else{
        output.textContent = `No gain no loss.`;
    }

}