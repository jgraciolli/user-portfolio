const Register = () => {
    return(
        <>
            <header>
                <h1>Create your portfolio account!</h1>
                <h2>Fill in the fields below to register.</h2>
            </header>

            <main className="register-container">
                <form action="/user/register" method="POST" className="register-form">
                <label htmlFor="username-field">Username</label>
                <input type="text" name="username" id="username-field" required />

                <label htmlFor="email-field">Email</label>
                <input type="email" name="email" id="email-field" required />

                <label htmlFor="password-field">Password</label>
                <input type="password" name="password" id="password-field" required />

                <button type="submit" id="register-button">Register</button>
                </form>

                <p className="redirect-msg">
                Already have an account? <a href="/login">Log in here.</a>
                </p>
            </main>
        </>
    )
}

export default Register