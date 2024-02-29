const loginForm = document.querySelector("#logIn-form");
const loginInput = document.querySelector("#logIn-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit (event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);//localStorage 에 데이터 저장 setItem(키값 , 변수(저장할 값))
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
}
function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUserName = localStorage.getItem(USERNAME_KEY);

if(saveUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else {
  paintGreeting(saveUserName);
}
