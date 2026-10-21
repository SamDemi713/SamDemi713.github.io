document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let user = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        dob: document.getElementById("dob").value
    };

    let result = document.getElementById("result");

    // Check that all fields are filled
    if (
        user.firstName == "" ||
        user.lastName == "" ||
        user.email == "" ||
        user.password == "" ||
        user.dob == ""
    ) {
        result.innerHTML = `
            <div class="alert alert-danger">
                <h3>Registration Failed</h3>
                <p>Please fill in all fields.</p>
            </div>
        `;
        return;
    }

    // Password must contain ! or ?
    if (!user.password.includes("!") && !user.password.includes("?")) {
        result.innerHTML = `
            <div class="alert alert-danger">
                <h3>Registration Failed</h3>
                <p>Password must contain ! or ?</p>
            </div>
        `;
        return;
    }

    // Hide the password with stars
    user.password = "*".repeat(user.password.length);

    result.innerHTML = `
        <div class="alert alert-success">
            <h3>Registration Successful!</h3>
            <p><strong>First Name:</strong> ${user.firstName}</p>
            <p><strong>Last Name:</strong> ${user.lastName}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Password:</strong> ${user.password}</p>
            <p><strong>Date of Birth:</strong> ${user.dob}</p>
        </div>
    `;
});