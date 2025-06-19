const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const userNameRegex = /^[a-zA-Z0-9_]{3,20}$/;

export const isValidLogin = (value) => {
    if (emailRegex.test(value))
        return 'email'
    else if (userNameRegex.test(value))
        return 'login_name'
    else
        return null
};

export const validateRegister = (username, email, password) => {
    if (!userNameRegex.test(username))
        return 'Invalid username, must contain only letters or numbers.'
    else if (!emailRegex.test(email))
        return 'Invalid email address.'
    if (password.length < 6)
        return 'Password must contain at least 6 characters.'

    return 'valid'
}