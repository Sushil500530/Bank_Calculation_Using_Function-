/*
1.add withdrow button event handler
2.get withdrow amount by using getInputValueById function 
3.get previous withdrow amount by using getTextElementById funcion
4.calculate new withdrow total and set the value
4-5. set new withdrow total by using set setTextElementValueById
5. get previous balance total by using getTextElementById function 
6. calculate new balance total
7. set balance total using setTextElementValueById function 
*/
document.getElementById('withdrow-btn').addEventListener('click', function(){
    const newWithdrowAmount = getInputValueById('input-withdrow')
    const previousWithdrowTotal = getTextElementById('withdrow-total')
    const newWithdrowTotal = previousWithdrowTotal + newWithdrowAmount ; 
    setTextElementValueById('withdrow-total',newWithdrowTotal)
    const previousBalanceTotal = getTextElementById('balance-total') ;
    const newBalanceTotal = previousBalanceTotal - newWithdrowAmount
    setTextElementValueById('balance-total', newBalanceTotal)


})