// auto slideShow background-images 
var images = ['./img/banner.png', './img/banner2.jpg', './img/banner3.webp'];
var currentIndex = 0; // Chỉ số hiện tại của hình ảnh

function changeBackground() {
    document.getElementById('background').style.backgroundImage = 'url(' + images[currentIndex] + ')';
    currentIndex = (currentIndex + 1) % images.length; // Tăng chỉ số hiện tại lên 1, nếu đã đạt đến cuối danh sách thì quay lại đầu danh sách
}
setInterval(changeBackground, 5000); // Gọi hàm changeBackground mỗi 5 giây để thay đổi background


// The onmouseover Event
document.getElementById('benefit-img-car').addEventListener('mouseover', mouseOver);
document.getElementById('benefit-img-car').addEventListener('mouseout', mouseOut);

function mouseOver() {
document.getElementById('benefit-img-car').style.transform = 'scale(1.3)';
document.getElementById('benefit-img-car').style.transition = 'linear .25s';
}

function mouseOut() {
document.getElementById('benefit-img-car').style.transform = 'scale(1)'; 
}


// contact form
// Đối tượng `Validator`
function Validator(options) {
    //hàm validate() thực hiện để hiện ra lỗi và bỏ lỗi
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage = rule.test(inputElement.value); 
        if (errorMessage) {
            errorElement.innerText = errorMessage; 
            errorElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            errorElement.parentElement.classList.remove('invalid');
        }
        
        return !errorMessage;
    }

    //lấy element của form cần validate
    var formElement = document.querySelector(options.form); 
    if (formElement) {
        // lắng nghe sự kiện khi submit form
        formElement.onsubmit = function(e) {
            e.preventDefault();
            var isFormValid = true; //trong trường hợp ko có lỗi
            //lặp qua từng rules và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isvalid = validate(inputElement, rule);
                if (!isvalid) {
                    isFormValid = false;
                }
            });
            if (isFormValid) {
                alert('Successful contact.');
            }
        }

//1        // lặp qua rule và xử lý (lắng nghe sự kiện blur, input);
        options.rules.forEach(function (rule){ 
            var inputElement = formElement.querySelector(rule.selector); 
            if (inputElement) {
                    //xử lí trường hợp blur khỏi input
                    inputElement.onblur = function () { 
                        validate(inputElement, rule);
                }
                //xử lí trường hợp nhập vào input
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    errorElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }
}

// định nghĩa các rules
// nguyên tắc của các rules:
// 1. khi có lỗi => trả ra message lỗi
// 2. khi hợp lệ => không ra cái gì cả
Validator.isRequired = function (selector) {
    return {
        selector: selector, 
        test: function (value) {
            return value.trim() ? undefined : 'Please enter your name !';
        }
    };
}

Validator.isEmail = function (selector) {
    return {
        selector: selector, 
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return regex.test(value) ? undefined : 'Input value is not email !';
        }
    };
}

Validator.isPhoneNumber = function (selector, min) {
    return {
        selector: selector, 
        test: function (value) {
            var regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
                return regexPhoneNumber.test(value) ? undefined : `Phone numbers must be in ${min} digit format ! `;
        }
    };
}

Validator.minLength = function (selector, min) {
    return {
        selector: selector, 
        test: function (value) {
            return value.trim().length >= min ? undefined : `Please enter a message of at least ${min} characters !`;
        }
    };
}   