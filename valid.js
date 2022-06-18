function validate(){
    var input = document.getElementById('in');
    var regexCode = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var errorMsg = document.getElementById('error');
    if(input.value.match(regexCode)){
        input.style.borderColor = "green";
        alert("Your response was successfully received!");
        return true;
    }else{
        input.style.borderColor = "red";
        errorMsg.style.display = "inline-block"
    return false;
    }
}