//Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    //Hide Results 
    document.getElementById('results').style.display = 'none';

    //Show Loader
    document.getElementById('loading').style.display = 'block';


    setTimeout(calculateResults, 900);

    e.preventDefault();
})

function calculateResults(){
    
    //Variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalInterest = document.getElementById('total-interest');
    const totalPayment = document.getElementById('total-payment');

    const principal = parseFloat(amount.value);
    const calculatedinterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
    
    //Calc Monthly interest
    const x = Math.pow(1 + calculatedinterest, calculatedPayments)
    const monthly = (principal*x*calculatedinterest)/(x-1);

    //Show in DOM
    if(isFinite(monthly)){
       monthlyPayment.value = monthly.toFixed(2);
       totalPayment.value = (monthly * calculatedPayments).toFixed(2)
       totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

       document.getElementById('results').style.display = 'block';

       document.getElementById('loading').style.display = 'none';
    }else{
        //Show error
        showError('Please check your Entered Numbers');
    }
}

function showError(error){
    if(document.querySelector('.alert')){
        null
    }else{
   const errorDiv =  document.createElement('div');


   errorDiv.className = 'alert alert-danger';
   errorDiv.style.transition = ' 0.5s';

   const errorText = document.createTextNode(error)

   errorDiv.appendChild(errorText);

   const card = document.querySelector('.card');
   const heading = document.querySelector('.heading');


    card.insertBefore(errorDiv, heading);

    setTimeout(hideError, 3000);
}   

document.getElementById('loading').style.display = 'none';
    
}


function hideError(){
    document.querySelector('.alert').remove();
}