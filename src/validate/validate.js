//function will return false if field is empty
function isEmpty(value) {
    if (value === '') {
        return false
    }
    else {
        return true
    }
}
// function is used to validate email 
export function validateEmail(email) {
    if (isEmpty(email)) {
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (pattern.test(email)) {
            return true
        }
        else {
            return 'Email is invalid'
        }
    }
    else {
        return 'Email is required'
    }
}
// function is used to validate name
export function validateName(name) {
    if (isEmpty(name)) {
        if (name.length < 4) {
            return 'Name Length should be greater than 4'
        }
        else {
            return true
        }
    }
    else {
        return 'Name is required'
    }
}
// function is used to validate Number
export function validateNumber(number) {
    if (isEmpty(number)) {
        if (number.length < 10 || number.length > 10) {
            return 'Number is invalid'
        }
        else {
            return true
        }
    }
    else {
        return 'Number is Required'
    }
}
// function is used to validate Password
export function validatePassword(password) {
    if (isEmpty(password)) {
        if (password.length <= 4) {
            return 'Password length should be greater than 4'
        }
        else {
            return true
        }
    } else {
        return 'Password is required'
    }
}
// function is used to validate Confirm Password
export function validateMatchPassword(password, confirmpassword) {
    if (isEmpty(confirmpassword)) {
        if (password === confirmpassword) {
            return true
        }
        else {
            return 'Password does not match'
        }
    } else {
        return 'Confirm Password is required'
    }
}
// function is used to validate Confirm Date
export function validateDate(date) {
    if (isEmpty(date)) {
        var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
        if (!pattern.test(date)) {

            return "Invalid date\n";;
        }
        else {
            return true
        }
    }
    else {
        return 'Date is required'
    }
}

