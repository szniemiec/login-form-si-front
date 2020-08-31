const form = document.querySelector("#box_frame");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = `email=${this.email.value}&password=${this.password.value}`;
    login(data);
})

function login(data) {
    fetch("http://localhost:8000/login",
        {
            method: "POST",
            body: data
        })
        .then(function (response) {
            if (response.ok) {
                alert("Logged in.")
                return response.json();
            }
            alert("Wrong credentials")
        })
        .then(function (user) {
            // console.log(user)
            localStorage.setItem("loggedUser", JSON.stringify(user));
            // zapisz do localstorage
            window.location.href = "dashboard.html";
        });
}