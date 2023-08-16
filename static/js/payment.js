const paymentMethods = document.querySelectorAll('.payment-method-block');
const paymentCardInfo1 = document.querySelector('.payment__card-info-1 span');
const paymentSelect = document.querySelector('.payment__select');
const priceInput = document.querySelector('.price-form input');
const totalPrice = document.querySelector('.price-txt span');


paymentMethods.forEach((paymentMethod, index) => {
    paymentMethod.addEventListener('click',function() {
        const selectedMethod = this.textContent;
        paymentCardInfo1.textContent = selectedMethod;


        for (let i = 0; i < paymentSelect.options.length; i++) {
            if (paymentSelect.options[i].textContent === selectedMethod) {
                paymentSelect.selectedIndex = i;
                break;
            }
        }
   })
})

priceInput.addEventListener('input',function() {
    const inputValue = this.value;
    totalPrice.textContent = inputValue;
    
})