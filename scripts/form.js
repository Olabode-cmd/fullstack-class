const data = [
    {
        email: "admin@gmail.com",
        password: "admin"
    },
    {
        email: "user123@gmail.com",
        password: "user123"
    },
    {
        email: "user456@gmail.com",
        password: "user456"
    },
]

const login = document.getElementById("login");
const email = document.getElementById("email");
const password = document.getElementById("password");


login.addEventListener("click", () => {
    const emailValue = email.value;
    const passwordValue = password.value;

    // const user = data.find(user => user.email === emailValue);
    const user = data.find((user) => {
        user.email === emailValue
    });

    if (!user) {
        alert("User not found");
        return;
    }

    if (user.password !== passwordValue) {
        alert("Invalid password");
        return;
    } else if (user.password === passwordValue) {
        alert("Login successful");
    } else  {
        alert("Error. Try again later.")
    }
})
