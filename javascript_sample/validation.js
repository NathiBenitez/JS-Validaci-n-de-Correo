function emailValidation() {
    const form = document.getElementById("form");
    const emailConfirmField = document.getElementById("email_confirm");

    const contentField = document.getElementById("content_field");
    const isEmailTheSame = () => form.email.value === form.email_confirm.value;
    const isAlertPresent = () => document.getElementById("alert"); 

    emailConfirmField.addEventListener("input", () => {
        if (!isEmailTheSame()){
            if (!isAlertPresent()) {
                const alertElement = createAlertElement();
                contentField.parentNode.insertBefore(alertElement, contentField);
                emailConfirmField.classList.add("emailalert");
            }
        } else {
            const alertElement = isAlertPresent();
            emailConfirmField.classList.remove("emailalert");
            alertElement.parentNode.removeChild(alertElement);
        }
    })
}


const createAlertElement = () => {
    const element = document.createElement("p");
    const text = document.createTextNode("Correo electrónico no coincide");
    element.append(text);
    element.setAttribute("id", "alert");
    element.classList.add("alert_color");

    return element
}


window.onload = function() {
    emailValidation();
};