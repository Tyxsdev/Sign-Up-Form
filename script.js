const password = document.getElementById('password');
const confirm = document.getElementById('confirm_password');
const inputs = document.querySelectorAll('.error');
const divs = document.querySelectorAll('.message');
let text = '';



confirm.addEventListener('keydown', (e) => {
    if (e.key === `Backspace`){
        text = text.slice(0, -1);
    } else if (e.key === `Shift` || e.key === `CapsLock`){
        text = text;
    }else{
        text += e.key;
    }
    if(password.value !== text){
        divs.forEach(div => {
            div.textContent = `*Passwords don't match`;
            div.style.color = `red`;
            inputs.forEach(input => {
                input.style.border = `1px solid red`;
                input.style['boxShadow'] = `none`;
            })
        })
    } else if(password.value === text){
        divs.forEach(div => {
            div.textContent = `Correct! passwords match`;
            div.style.color = `#327502`;
            inputs.forEach(input => {
                input.style.border = `1px solid #5097c7`;
                input.style['boxShadow'] = `3px 3px 1px #5097c7`;
            })
        })
    }
})
    



