let registrations = [];

function validation(event){
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const company = document.getElementById("company").value;
    const virtual = document.getElementById("virtual").checked;
    const inperson = document.getElementById("inperson").checked;
    
    let isValid = true;
    if (!name || name.length < 6 || name.length > 100){
        const ErrorElement = document.getElementById("nameErr");
        ErrorElement.innerHTML = "Name must be between 6-100 letters.";
        isValid = false;
    } else {
        const ErrorElement = document.getElementById("nameErr");
        ErrorElement.innerHTML = "";
    }
    if (!email || !email.includes('@') || !email.includes('.')){
        const ErrorElement = document.getElementById("emailErr");
        ErrorElement.innerHTML = "Invalid email address.";
        isValid = false;
    } else {
        const ErrorElement = document.getElementById("emailErr");
        ErrorElement.innerHTML = "";
    }
    if (company && company.length > 100){
        const ErrorElement = document.getElementById("companyErr");
        ErrorElement.innerHTML = "too latge name.";
        isValid = false;
    } else {
        const ErrorElement = document.getElementById("companyErr");
        ErrorElement.innerHTML = "";
    }
    if (!virtual && !inperson){
        const ErrorElement = document.getElementById("attendanceErr");
        ErrorElement.innerHTML = "Please type.";
        isValid = false;
    } else {
        const ErrorElement = document.getElementById("attendanceErr");
        ErrorElement.innerHTML = "";
    }
    if (isValid) {
        let attendance;
        if (virtual) {
            attendance = "Virtual";
        } else {
            attendance = "In-Person";
        }
        registrations.push({ attendance: attendance });
        alert("Registration successful!");
    }
    return false;
}

function display(){
    const field = document.getElementById("displayArea");
    const button = document.getElementById("showButton");
    
    if (field.style.display === "none") {
        field.style.display = "flex";
        button.innerHTML = "Hide Event Analytics";
        let virtual = 0, person = 0;
        for (let i = 0; i < registrations.length; i++){
            if (registrations[i].attendance === "Virtual") virtual++;
            else person++;
        }
        document.getElementById("totalCount").innerHTML = registrations.length;
        document.getElementById("virtualCount").innerHTML = virtual;
        document.getElementById("inpersonCount").innerHTML = person;
    } else {
        field.style.display = "none";
        button.innerHTML = "Show Event Analytics";
    }
}