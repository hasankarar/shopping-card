
document.getElementById('btn_phone_plus').addEventListener('click', function () {
    const addInputPhone = updatePhoneNumber(true);
    phonePriceUpdate(addInputPhone);
    subtotal();
});


document.getElementById('btn_minus_phone').addEventListener('click', function () {
    const addInputPhone = updatePhoneNumber(false);
    phonePriceUpdate(addInputPhone);
    subtotal();
});