
document.getElementById('deposit-btn').addEventListener('click', function(){
    /*
    1.get the element by id
    2.get the value from the element
    3.convert string value to a number
    */

    const newDepositAmount = getInputValueById('input-deposit')
    // console.log(newDepositAmount) 
    /*
    1. get previous deposit total by id
    2. calculate new deposit total
    */
   const previousDepositTotal = getTextElementById('diposit-total') ;
    // calculate new deposit total 
    const newDepositToral = previousDepositTotal + newDepositAmount ; 
    // set deposit total value 
    setTextElementValueById('diposit-total',newDepositToral)
    // get previous balance by using the function 
    const previousBalanceTotal = getTextElementById('balance-total')
    const newBalanceTotal = previousBalanceTotal + newDepositAmount ;
    setTextElementValueById('balance-total', newBalanceTotal)
})