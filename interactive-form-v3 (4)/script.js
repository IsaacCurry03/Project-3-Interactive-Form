
 const nameInput = document.getElementById("name");nameInput.focus();

// hideing text field for other job role and making the text field show up for the other text field when clicked on
document.getElementById("other-job-role").style.visibility = "hidden";
 
 var title = document.getElementById('title');
 var othertext = document.getElementById("other-job-role");

title.addEventListener('change', (e) =>{

if(e.target.value === 'other'){
othertext.style.visibility = "visible";

} if(e.target.value !== 'other'){
othertext.style.visibility = "hidden";

}
});



                  // t shirt //



document.getElementById("color").disabled = true;


//Program the "Design" <select> element to listen for user changes. When a change is detected 
var designs={
jspuns:['Cornflower Blue','Dark Slate Grey', 'Gold'],
heartjs:["Tomato",  "Steel Blue","Dim Grey"]

}


var design =document.getElementById("design");
var color = document.getElementById("color");

design.addEventListener('change',function(){
  
document.getElementById("color").disabled = false;


var selected_option  = designs[this.value];

while(color.options.length > 0){
color.options.remove(0);

}
Array.from(selected_option).forEach(function(el){

let option = new Option(el,el);

// append the child in sub menu

color.appendChild(option)

})

});
// register
//Register for activities filtering section
const checkFieldSet = document.querySelector('.activities');
const checkbox = document.querySelectorAll('input[type=checkbox]');
const activities = document.querySelector('.activities');
const runningTotal = document.createElement('h4');
activities.appendChild(runningTotal);
let total = 0;
runningTotal.innerHTML = `$${total}`;

//rework this later and refactor (probably a better way to do this but it functions)
checkFieldSet.addEventListener('change', (e) => {
    if (checkbox[1].checked === true && e.target === checkbox[1]) {
        checkbox[3] = true;
    } else if (checkbox[1].checked === false && e.target === checkbox[1]) {
        checkbox[3] = false;
    } else if (checkbox[3].checked === true && e.target === checkbox[3]) {
        checkbox[1] = true;
    } else if (checkbox[3].checked === false && e.target === checkbox[3]) {
        checkbox[1] = false;
    } else if (checkbox[2].checked === true && e.target === checkbox[2]) {
        checkbox[4] = true;
    } else if (checkbox[2].checked === false && e.target === checkbox[2]) {
        checkbox[4] = false;
    } else if (checkbox[4].checked === true && e.target === checkbox[4]) {
        checkbox[2] = true;
    } else if (checkbox[4].checked === false && e.target === checkbox[4]) {
        checkbox[2] = false;
    }

    // display total below the checkbox's when they are checked

    if (e.target.checked && e.target === checkbox[0]) {
        total = total + 200
    }
    if (e.target.checked && e.target !== checkbox[0]) {
        total = total + 100;
    }
    if (!e.target.checked && e.target === checkbox[0]) {
        total = total - 200
    }
    if (!e.target.checked && e.target !== checkbox[0]) {
        total = total - 100
    }

    runningTotal.innerHTML = `$${total}`;
});
// paymeny info section
const paymentOption = document.querySelectorAll('#payment option')
const creditcard = document.querySelector('#credit-card')
const paypal = document.querySelector('#paypal')
const bitcoin = document.querySelector('#bitcoin')

payment[0].disabled = true
payment[1].selected = true
paypal.hidden = true
bitcoin.hidden = true

document.querySelector('#payment').addEventListener('change', () => {
  if (payment[1].selected) {
    creditcard.hidden = false
    paypal.hidden = true
    bitcoin.hidden = true
  } else if (payment[2].selected) {
    creditcard.hidden = true
    paypal.hidden = false
    bitcoin.hidden = true
  } else if (payment[3].selected) {
    creditcard.hidden = true
    paypal.hidden = true
    bitcoin.hidden = false
  }
})
// Register
 
//form valiadation for all fields (includes error messages and tooltips)
const form = document.querySelector('form');
const email = document.getElementById('email');
const registerBut = document.querySelector('button[type=submit]');
const regex = /[\w]{1,}\@[a-zA-Z]{3,}\.[a-zA-Z]{3}/;
 
 
form.addEventListener('submit', (e) => {
 
    //Checking name field
    if (nameInput.value === '' || nameInput.value == null) {
        e.preventDefault();
        nameInput.placeholder = 'NAME IS REQUIRED!';
        nameInput.style.borderColor = 'red';
    }
    //Checking email field
    if (email.value === '' || !regex.test(email.value)) {
        e.preventDefault();
        email.placeholder = 'PLEASE ENTER VALID EMAIL';
        email.style.borderColor = 'red';
    }
    //Checking if at least one checkbox has been checked
 
    let countCheckBox = 0;
 
    //count all checkboxs and if not checked add them to the above variable
    for (let i = 0; i < checkbox.length; i++) {
        if (!checkbox[i].checked) {
            countCheckBox++
        }
    }
    //If the checkbox variable equals the amount of checkboxes then no boxes are checked and error should be shown
    if (countCheckBox === checkbox.length) {
        e.preventDefault();
        runningTotal.innerHTML = "Please choose a conference or workshop!";
        activities.style.borderLeft = '2px solid red';
        activities.style.borderRight = '2px solid red';
 
    }
 
 
    //Checking CC information fields
    const creditCardField = document.getElementById('cc-num');
    const zipCode = document.getElementById('zip');
    const cvvNumb = document.getElementById('cvv');
//  using regex to make is so there has to be a certain amount of numbers for the form to be
    const ccNum = /^[\d]{13,16}$/;
    const regZip = /^[\d]{5}$/;
    const regCvv = /^[\d]{3}$/;
 
//  using error codes in the fields so it can see what is missing
    if (paymentOption[1].selected) {
        
        if (creditCardField.value === '' || !ccNum.test(creditCardField.value)) {
            e.preventDefault();
            creditCardField.placeholder = 'Please enter Valid Credit Card Number';
            creditCardField.style.borderColor = 'red';
        }
        
        if (zipCode.value === '' || !regZip.test(zipCode.value)) {
            e.preventDefault();
            zipCode.style.borderColor = 'red';
        }
        
        if (cvvNumb.value === '' || !regCvv.test(cvvNumb.value)) {
            e.preventDefault();
            cvvNumb.style.borderColor = 'red';
        }
    }
 
});
 


