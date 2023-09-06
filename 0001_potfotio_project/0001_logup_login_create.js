
const signUpLink = document.querySelector('.sign_up_btn_link');

const signInLink = document.querySelector('.sign_in_btn_link');

const wrapper = document.querySelector('.wrapper');
signUpLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
signInLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});



