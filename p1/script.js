const loginForm = () => {
    const str = `<div id="login">
    <h3>Login Form</h3>
    <label for="Email">Email: </label>
    <input type="email" placeholder="Enter email">
    <br><br>
    <label for="Password">Password: </label>
    <input type="password" placeholder="Enter Password">
    <p><button onclick='showHome()'>Submit</button></p>
    <p><button onclick='registerForm()'>Create Account</button></p>
    `
    root.innerHTML = str + "</div>"
}

const registerForm = () => {
    const str = `<div>
    <h3>Registration Form</h3>
    <label for="name">Name: </label>
    <input type="name" placeholder="Enter Name">
    <br><br>
    <label for="Email">Email: </label>
    <input type="email" placeholder="Enter email">
    <br><br>
    <label for="Password">Password: </label>
    <input type="password" placeholder="Enter Password">
    <p><button onclick='loginForm()'>Submit</button></p>
    <p><button onclick='loginForm()'>Already a member? Login here...</button></p>
    `
    root.innerHTML = str + "</div>"
}

const showHome = () => {
    const str = `<div>
    <h3>Welcome! This is the home page...</h3>
    <p><button onclick='loginForm()'>Logout</button></p>
    `
    root.innerHTML = str + "</div>"
}