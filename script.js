// Mobile & Case update value
function upDateProductNumber(product, price, isIncreasing){

    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing){
        productNumber = parseInt(productNumber) + 1;
    }
    else{
        if(productNumber > 0){
            productNumber = parseInt(productNumber) -1;
        }
    }
    productInput.value = productNumber;
    // update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();
}
// Mobile Increase decrease handler
document.getElementById('mobile-plus').addEventListener('click', function(){
    upDateProductNumber('mobile', 1219, true); 
})
document.getElementById('mobile-minus').addEventListener('click', function(){
    upDateProductNumber('mobile', 1219, false);
})
// Case Increase & decrease handler
document.getElementById('case-plus').addEventListener('click', function(){
    upDateProductNumber('case', 59, true); 
})
document.getElementById('case-minus').addEventListener('click', function(){
    upDateProductNumber('case', 59, false); 
})
function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const mobileTotal =  getInputValue('mobile') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = mobileTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // Update on the Html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
