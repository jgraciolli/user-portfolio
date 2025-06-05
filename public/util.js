export const isValidLogin = (value) => {
    const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const userName = /^[a-zA-Z0-9_]{3,20}$/;

    if (email.test(value))
        return 'email'
    else if (userName.test(value))
        return 'login_name'
    else
        return 'invalid'
};