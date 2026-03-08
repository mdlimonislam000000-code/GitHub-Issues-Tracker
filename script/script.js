// sing in button start

document.getElementById("sing-in-button").addEventListener("click", function() {
    const userNameInput = document.getElementById("user-name")
    const userNameValue = userNameInput.value;
    // console.log(userNameValue);

    const passwordInput = document.getElementById("password-input");
    const passwordValue = passwordInput.value;
    // console.log(passwordValue)

    if(userNameValue == 'admin' && passwordValue == 'admin123'){
        alert('login success')
        window.location.replace("/home.html")
    }else{
        alert('something wrong')
        return;
    }
})