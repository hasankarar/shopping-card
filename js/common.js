
function updatePhoneNumber(isIncrease) {
    const newInputPhone = document.getElementById('new_input_phone');
    const newInputPhoneString = newInputPhone.value;
    const newInputPhoneNumber = parseInt(newInputPhoneString);

    let addInputPhone;

    if (isIncrease) {
        addInputPhone = newInputPhoneNumber + 1;
    } else {
        addInputPhone = newInputPhoneNumber - 1;
    }

    newInputPhone.value = addInputPhone;
    return addInputPhone;
}


function phonePriceUpdate(addInputPhone) {
    const PhonePrice = addInputPhone * 1219;
    const phonePriceTotalElement = document.getElementById('phone_total');
    phonePriceTotalElement.innerText = PhonePrice;
}

function getElementTextById(elementID) {
    const phoneTotalElement = document.getElementById(elementID);
    const phoneTotalElementString = phoneTotalElement.innerText;
    const phoneTotalElementStringAmount = parseInt(phoneTotalElementString);
    return phoneTotalElementStringAmount;
}

function setElementByID(element, value) {
    const subtotalAmount = document.getElementById(element);
    subtotalAmount.innerText = value;

}

function subtotal() {
    // calculate phone
    const currentPhoneElemetAmount = getElementTextById('phone_total');
    const currentCaseElemetAmount = getElementTextById('caste_total');
    const currentSubtotal = currentPhoneElemetAmount + currentCaseElemetAmount;
    setElementByID('sub_total', currentSubtotal);


    //tax total 
    const taxtAmountStrint = (currentSubtotal * 0.1).toFixed(2);
    const taxtAmount = parseFloat(taxtAmountStrint);
    setElementByID('tax', taxtAmount);

    //final total
    const finalTotal = currentSubtotal + taxtAmount;
    setElementByID('final_total', finalTotal);

}



function updateCaseNumber(isIncrises) {
    const newInputValuep = document.getElementById('new_input_case');
    const newInputValueString = newInputValuep.value;
    const newInputValueStringNumberp = parseInt(newInputValueString);

    let addNewinput;


    if (isIncrises) {
        addNewinput = newInputValueStringNumberp + 1;
    }

    else {
        addNewinput = newInputValueStringNumberp - 1;
    }


    newInputValuep.value = addNewinput;
    return addNewinput;
}

function updateCaseTotalPrice(addNewinput) {
    const newCaseTotalPrice = addNewinput * 59;
    const caseTotalElement = document.getElementById('caste_total');
    caseTotalElement.innerText = newCaseTotalPrice;
}


