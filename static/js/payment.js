const paymentMethods = document.querySelectorAll('.payment-method-block');
const paymentCardInfo1 = document.querySelector('.payment__card-info-1 span');
const paymentSelect = document.querySelector('.payment__select');
paymentMethods.forEach((paymentMethod, index) => {
    paymentMethod.addEventListener('click',function() {
        const selectedMethod = this.textContent;
        paymentCardInfo1.textContent = selectedMethod;
        const paymentInfoSpan = document.querySelector('.payment__card-info-1 span');

        // 결제 정보를 변경합니다.
        paymentInfoSpan.textContent = blockText;

        // 결제 방법 선택 상자를 선택된 옵션으로 설정합니다.
        for (let i = 0; i < paymentSelect.options.length; i++) {
            if (paymentSelect.options[i].text === blockText) {
                paymentSelect.selectedIndex = i;
                break;
            }
        }
   })
})