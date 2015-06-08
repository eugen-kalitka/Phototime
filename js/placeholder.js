window.onload = function(){
    var placeholder = "your email",
        eMailField = document.getElementById("email-field");

    function setPlaceholder() {
        if(eMailField.value == "") {
            eMailField.innerText = placeholder;
        }
    }

    setPlaceholder();

    if (eMailField.addEventListener) {
        eMailField.addEventListener("change", setPlaceholder);
        eMailField.addEventListener("focusout", setPlaceholder);
    } else {
        eMailField.attachEvent("onchange", setPlaceholder);
        eMailField.attachEvent("onfocusout", setPlaceholder);
    }
};