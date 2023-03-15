
const calculateButton = document.getElementById('calculateLoanButton');
const userTotalLoanAmount = document.getElementById('userTotalLoanAmount');
const userAmortization = document.getElementById('userAmortization');
const userInterestRare = document.getElementById('userInterestRare');
const userRateDeduction = document.getElementById('userRateDeduction');

const userTotalPayment = document.getElementById('userTotalPayment');



calculateButton.addEventListener('click', () => {

  calculateLoanPayment(totalLoanAmount.value, rateInput.value, amountYearInput.value);
  calculateEndDate();

});

function calculateLoanPayment() {
  const P = parseFloat(document.getElementById('totalLoanAmount').value);
  const rare = parseFloat(document.getElementById('rateInput').value);
  const n = parseFloat(document.getElementById('amountYearInput').value) * 12;

  const r = rare / 100 / 12;
  let A = (P * r * (1 + r) ** n) / ((1 + r) ** n - 1); //monthly payment amount
  const amortizationPerMonth = Math.round(P / n);

  const interestPerMonth = Math.round(P * r);
  
  const monthlyPaymentWithAmortization = Math.round(amortizationPerMonth + interestPerMonth);
  const monthlyAmortizationPayment = Math.round(amortizationPerMonth);
  const monthlyInterestPayment = Math.round(interestPerMonth);
  
  userTotalLoanAmount.innerHTML = P + ' kr';
  userAmortization.innerHTML = monthlyAmortizationPayment + ' kr';
  userInterestRare.innerHTML = rare + '%';
  userTotalPayment.innerHTML = monthlyPaymentWithAmortization + ' kr';
  document.getElementById('userInterestPayment').innerHTML = monthlyInterestPayment + ' kr';

}

function calculateEndDate() {

  var inputDate = new Date(document.getElementById('startDateInput').value);
  const paymentYears = Number(document.getElementById('amountYearInput').value);

  const endDate = new Date(inputDate.getFullYear() + paymentYears, inputDate.getMonth(), inputDate.getDate());
  console.log(endDate + ' test')

 document.getElementById('userEndDate').innerHTML = endDate.toISOString().slice(0,10);


}
