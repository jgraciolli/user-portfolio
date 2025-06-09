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
    if (!userNameRegex.test(username) || !emailRegex.test(email) || password.length < 6)
        return null

    return 'valid'
}