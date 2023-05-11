// Auth Form
const btnSignIn = document.querySelector('#btn-sign-in');
const formSignIn = document.querySelector('.modal-2');
const boxSignIn = document.querySelector('.auth-form-2');
const btnClose2 = document.querySelector('.auth-form-close2');

btnSignIn.onclick = function () {
    formSignIn.style.display = 'flex';
}

btnClose2.onclick = function () {
    formSignIn.style.display = 'none';
}

formSignIn.onclick = function () {
    formSignIn.style.display = 'none';
}

boxSignIn.onclick = function (event) {
    event.stopPropagation();
}