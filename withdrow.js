document.getElementById('withdrow-btn').addEventListener('click',function(){
    // 
    const withdrowField = document.getElementById('input-withdrow') ;
    const newWithdrowString = withdrowField.value ;
    const newWithdrow = parseFloat(newWithdrowString) ;
    withdrowField.value = '' ;

    const withdrowAmount = document.getElementById('withdrow-total') ;
    const previousWithdrowString = withdrowAmount.innerText ;
    const previousithdrow = parseFloat(previousWithdrowString)

    const totalWithdrowBalance = previousithdrow + newWithdrow ;
    withdrowAmount.innerText = totalWithdrowBalance

    const totalBalance = document.getElementById('balance-total') ;
    const newBalanceString = totalBalance.innerText ;
    const newAmountBalance = parseFloat(newBalanceString) ;

    const totalNewBalanceAmount = newAmountBalance - newWithdrow ;
    totalBalance.innerText = totalNewBalanceAmount

})