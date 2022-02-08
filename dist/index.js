function validateSignInForm(e) {
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const form = e.target;
    const field = Array.from(form.elements);

    if(password1.value !== password2.value) {
        // password1 and password2 do not match - marks fields as invalid
        // add custom validation message
        // add class
        password1.setCustomValidity("Passwords don't match.");
        password2.setCustomValidity("Passwords don't match.");
        password2.reportValidity();
        password1.parentElement.classList.add('invalid');
        password2.parentElement.classList.add('invalid');
    }
    else if (password1.value === password2.value){
        // password1 and password2 match - marks fields as valid
        // remove class
        password1.setCustomValidity('');
        password2.setCustomValidity('');
        password1.parentElement.classList.remove('invalid');
        password2.parentElement.classList.remove('invalid');
    }

    // apply/remove invalid class
    field.forEach(i => {
        if(i.checkValidity()) {
            // field is valid - remove class
            i.parentElement.classList.remove('invalid');
        }
        else {
            // field is invalid - add class
            i.parentElement.classList.add('invalid');
        }
    });
    
    if (!form.checkValidity()) {

        // form is invalid - cancel submit
        e.preventDefault();
        e.stopImmediatePropagation();
    }
}

const signInForm = document.getElementById("signInForm");
signInForm.noValidate = true;

signInForm.addEventListener('submit', validateSignInForm)