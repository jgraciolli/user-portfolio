const Login = () => {
    return(
        <>
            <header>
                <h1>Welcome to your portfolio app!</h1>
                <h2>Please log in with your account to access your portfolio.</h2>
            </header>
            <main>
                <form action="/user/login" method="POST">
                    <label htmlFor="login-field">Login</label>
                    <input type="text" name="login" id="login-field" placeholder="Enter your email or username" required />

                    <label htmlFor="password-field">Password</label>
                    <input type="password" name="password" id="password-field" placeholder="Enter your password" required />

                    <button type="submit" id="login-button">Login</button>
                </form>
                <p className="redirect-msg">Don't have an account? Register <a href="/register">here.</a></p>
            </main>
        </>
    )
}

export default Login