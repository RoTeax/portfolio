function getFormData() {
    var card = {
        creditcardnumber: document.getElementById("creditcardnumber").value,
        cvv: document.getElementById('CVV').value,
        name: document.getElementById('name').value,
        expiry: document.getElementById('expiry').value
    }
    return card;
}

function cardValidator(card){

    var isValid = true;

    if(card.creditcardnumber === ''){
        isValid = false;
    }

    if(card.cvv === ''){
        isValid = false;
    }

    if(card.name === ''){
        isValid = false;
    }

    if(!expiryValidator(card.expiry)){
        isValid = false;
    }
    return isValid;
}

function cardVendor(cardNumber){

    if(cardNumber.slice(0, 4) === '4319') {
        console.log("VISA");
        return 'VISA';
    } 
    else if (cardNumber.slice(0, 4) === '5545') {
        console.log("MASTERCARD");
        return 'MASTERCARD';
    }
    else if (cardNumber.slice(0, 4) === '3528') {
        console.log("JCB");
        return 'JCB';
    }
    console.log("UNKNOWN");
    return 'UNKNOWN';
}

function expiryValidator(expiry){

    var month = 12;
    var year = 17;

    var usermonth = Number(expiry.slice(0,2));
    var useryear = Number(expiry.slice(2));
    return usermonth >= month && useryear >= year || usermonth <= month && useryear > year;
}

document.getElementById('submitButton').addEventListener("click", function () {
    
    var validator = document.getElementById("validOrNot");
    var output = document.getElementById("output");
    var card = getFormData();
    
    if(cardValidator(card)){
        validator.innerText = "The Card is Valid";
        output.innerText = "Card Type is: " + cardVendor(card.creditcardnumber);
    }
    else{
        validator.innerText = "It's not valid";
    }

});