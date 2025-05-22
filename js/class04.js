

function checkForm() {
    var carBrand = document.getElementById("ourCarBrandTxtbx");
    var carYear = document.getElementById("ourCarYearTxtbx");
    var emailAddress = document.getElementById("ourEmailAddressTxtbx");

    if(carBrand.value == ""){
        alert("Please enter a car brand!");
        carBrand.focus();
        return false;
    }

    if(carYear.value == ""){
        alert("Please enter a car year!");
        carYear.focus();
        return false;
    }

    if(isNaN(carYear.value)){
        alert("Please enter a number");
        carYear.focus();
        return false;
    }

    // roberto ----> "@" -----> -1
    // rob@hotmail ----> "@" -----> 0

    if (emailAddress.value.indexOf("@") == -1){
        alert("Please enter a valid email address");
        emailAddress.focus();
        return false;
    }

    // 1920 ---> 2025
    // 19920 

    if (carYear.value.length > 4 || carYear.value < 1920){
        alert("This cannot be a car! Because its year is not logical or cars were not invented yet or cars is in future");
        carYear.focus();
        return false;   
    }

    alert("All good!");
    return true;
}

function changeColour(receivedTextbox){
    receivedTextbox.style.background = "blue";
}