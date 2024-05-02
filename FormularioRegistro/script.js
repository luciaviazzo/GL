const form = document.getElementById("registrationForm");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const birthday = document.getElementById("birthday");
const newsletter = document.getElementById("newsletter");

form.addEventListener("submit", function(event) {

    if(validateName(firstName.value, firstName) &&
        validateName(lastName.value, lastName) &&
        validateUsername(username.value, username) &&
        validatePassword(password.value, password) &&
        validateConfirmPassword(password.value, confirmPassword.value, confirmPassword) &&
        validateBirthday(birthday.value, birthday)) {
        alert("Form submitted successfully!");
        form.submit(); 
    } else {
        alert("Please verify the form fields!");
    }
});

const validateName = (inputValue, inputField) => {
    const isValid = inputValue.trim() !== "" && /^[A-Za-z]+$/.test(inputValue);
    return setFieldError(isValid, inputField);
};

const validateUsername = (inputValue, inputField) => {
    const isValid = inputValue.trim() !== "" && inputValue.length < 9 && !inputValue.includes(" ");
    return setFieldError(isValid, inputField);
};

const validatePassword = (inputValue, inputField) => {
    const isValid = inputValue.trim() !== "" && inputValue.length < 9 && !inputValue.includes(" ");
    return setFieldError(isValid, inputField);
};

const validateConfirmPassword = (passwordValue, inputValue, inputField) => {
    const isValid = passwordValue === inputValue;
    return setFieldError(isValid, inputField);
};

const validateBirthday = (inputValue, inputField) => {
    const isValid = inputValue.trim() !== "";
    return setFieldError(isValid, inputField);
};

const setFieldError = (isValid, inputField) => {
    if (!isValid) {
        inputField.classList.add("error");
        inputField.classList.remove("correct");
    } else {
        inputField.classList.add("correct");
        inputField.classList.remove("error");
    }
    return isValid;
};
