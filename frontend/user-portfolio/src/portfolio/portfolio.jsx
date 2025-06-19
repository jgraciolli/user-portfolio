const Portfolio = () => {
    return(
        <>
            <header>
                <h1>Your Portfolio</h1>
                <h2>Complete or update your profile details below.</h2>
            </header>
            <main className="portfolio-container">
                <form action="/portfolio" method="POST" encType="multipart/form-data" className="portfolio-form">
                
                <label htmlFor="name-field">First Name</label>
                <input type="text" name="name" id="name-field" required />

                <label htmlFor="surname-field">Last Name</label>
                <input type="text" name="surname" id="surname-field" required />

                <label htmlFor="age-field">Age</label>
                <input type="number" name="age" id="age-field" min="0" max="120" required />

                <label htmlFor="skills-field">Skills</label>
                <textarea name="skills" id="skills-field" rows="4" placeholder="e.g. Javascript, Node.js, React..." required></textarea>

                <label htmlFor="photo-field">Upload Profile Photo</label>
                <input type="file" name="profilePhoto" id="photo-field" accept="image/*" />

                <button type="submit" id="save-button">Save Portfolio</button>
                </form>
            </main>
        </>
    )
}

export default Portfolio