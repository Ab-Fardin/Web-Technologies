function validation(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let isValid = true;

    if (!email || email == ""){
        const ErrorElement = document.getElementById("emailErr");
        ErrorElement.innerHTML = "Email is required";
        isValid = false;
    } else {
        const ErrorElement = document.getElementById("emailErr");
        ErrorElement.innerHTML = "";
    }
    if (!password || password == ""){
        const ErrorElement = document.getElementById("passwordErr");
        ErrorElement.innerHTML = "Password is required";
        isValid = false;
    } else {
        const ErrorElement = document.getElementById("passwordErr");
        ErrorElement.innerHTML = "";
    }
    return isValid;
}