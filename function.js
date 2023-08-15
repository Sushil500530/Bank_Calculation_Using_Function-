document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmountField = document.getElementById('input-deposit') ;
    const depositAmountFieldString = depositAmountField.value  ;
    const newDepositAmount = parseFloat(depositAmountFieldString)
    depositAmountField.value = '' ;
  
    const totalElement = document.getElementById('diposit-total')
    const totalElementSting = totalElement.innerText ;
    const previousTotalDeposit = parseFloat(totalElementSting)

    const totalDeposit = previousTotalDeposit + newDepositAmount ;
    totalElement.innerText = totalDeposit 

    const balanceField = document.getElementById('balance-total') 
    const balanceFieldString = balanceField.innerText ;
    const previousBalance = parseFloat(balanceFieldString) 

    const newTotalBalance = previousBalance + newDepositAmount ;
    balanceField.innerText = newTotalBalance
})
