const correctUserName = "janne";
const correctPassWord = "test";

//Get elements //
const header = document.querySelector("header");
const main = document.querySelector("main");

//Show welcome page in function
function welcomePage() {

    //input field for userName
    const userNameInput = document.createElement("input");
    userNameInput.placeholder = "Username";

    //input field for passWord
    const passWordInput = document.createElement("input");
    passWordInput.placeholder = "Password";


    //button text login
    const logInBtn = document.createElement("button");
    logInBtn.textContent = "Log in";


    header.append(userNameInput, passWordInput, logInBtn);

    //h2 - text Please enter your username and password to log in.
    const mainText = document.createElement("h2");
    mainText.textContent = "Enter your name and password";
    mainText.id = "mainText"
    main.append(mainText);

    //Click button to go to success page or error page
    logInBtn.addEventListener("click", () => {

        const nameInputValue = userNameInput.value;
        const passWordInputValue = passWordInput.value;

        if (nameInputValue === correctUserName && passWordInputValue === correctPassWord) {
            localStorage.setItem("Username", correctUserName);
            localStorage.setItem("Password", correctPassWord);

            location.reload();
        }
        //if wrong userName and/or passWord - show error page
        //Still show input fields and button
        //Show h2 Wrong name jedi
        else if (nameInputValue !== correctUserName && passWordInputValue !== correctPassWord) {
            mainText.textContent = "Wrong name jedi!";
        }
    });
}

//Show success page:
//No input fields
function loggedInPage() {

    //Button with text log out
    const logOutBtn = document.createElement("button");
    logOutBtn.textContent = "Log out";

    header.append(logOutBtn);

    //h2 - text: Welcome to the Darkside
    const mainText = document.createElement("h2");
    mainText.textContent = "Welcome to the Darkside";
    mainText.id = "mainText"
    main.append(mainText);

    //LocalStorage should clear and reload
    logOutBtn.addEventListener("click", () => {
        localStorage.clear();
        location.reload();
    });
}

if (localStorage.getItem('Username') === null) {
    welcomePage();
}
else {
    loggedInPage();
}

