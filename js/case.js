



document.getElementById('btn_plus_case').addEventListener('click', function () {
    const addNewinput = updateCaseNumber(true);
    updateCaseTotalPrice(addNewinput);
    subtotal();

});

document.getElementById('btn_minus_case').addEventListener('click', function () {
    const addNewinput = updateCaseNumber(false);
    updateCaseTotalPrice(addNewinput);
    subtotal();

});



