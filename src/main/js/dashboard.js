const user = JSON.parse(localStorage.getItem('loggedUser'));
const details = document.querySelector('#details');

function viewLoggedUser(user) {
    details.querySelector('label[for=email]').innerHTML = user.email;
    details.querySelector('label[for=password]').innerHTML = user.password;
}

viewLoggedUser(user);