const btnSignUp = document.querySelector('#btn-sign-up');
const formSignUp = document.querySelector('.modal');
const boxSignUp = document.querySelector('.auth-form');
const btnClose = document.querySelector('.auth-form-close');

btnSignUp.onclick = function () {
    formSignUp.style.display = 'flex';
}

btnClose.onclick = function () {
    formSignUp.style.display = 'none';
}

// Xử lí sự kiện click bên ngoài form
formSignUp.onclick = function () {
    formSignUp.style.display = 'none';
}

// Ngăn chặn sự kiện nổi bọt của thẻ cha
boxSignUp.onclick = function (event) {
    event.stopPropagation();
}
