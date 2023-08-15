
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputFieldValueString = inputField.value ;
    const inputFieldValue = parseFloat(inputFieldValueString)
    inputField.value = '' ;
    return inputFieldValue ;
 }

 function getTextElementById(elementId){
    const textElement = document.getElementById(elementId) ;
    const textElementValueString = textElement.innerText ;
    const textElementValue = parseFloat(textElementValueString) ;
    return textElementValue ;
 }

 function setTextElementValueById(element , newValue){
    const textElement = document.getElementById(element) ;
    textElement.innerText = newValue ;
 }