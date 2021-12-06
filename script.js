function startPage() {    // Function for startpage 
    let header = document.getElementById("header") //  Get the Header element
    let main = document.getElementById("main")    //  Get the Main element

    let userNameInput = document.createElement("input")   // username input element
    userNameInput.placeholder = "Sithlord"                 // text in input

    let passWordInput = document.createElement("input")  //input field for passWord
    passWordInput.placeholder = "Password"                 // text in password

    let mainContent = document.createElement("h1")            // create h1
    mainContent.textContent = "Username and password"         // Textcontent 
    main.append(mainContent);                                    // append maintext to main

    let logInBtn = document.createElement("button");   // create button 
    logInBtn.textContent = "Join";                    // button log in text 
    header.append(userNameInput, passWordInput, logInBtn);  // Inputs + button in html 

    logInBtn.addEventListener("click", () => {             //Eventlistener for login button

        let nameInputValue = userNameInput.value;          // Eventlistener catch up username input value
        let passWordInputValue = passWordInput.value;      // Evenetlistener catch up password input



        if (nameInputValue === rightUserName && passWordInputValue === rightPassWord) { //If correct username and password input  set to localstorage
            localStorage.setItem("Username", rightUserName);
            localStorage.setItem("Password", rightPassWord);

            location.reload();
        }




        else if (nameInputValue !== rightUserName && passWordInputValue !== rightPassWord) {  // else if wrong 
            mainContent.textContent = "Wrong name jedi!";  // shows in maintext if wrong username / password
        }
    });

}

function loggedIn() {     // Function for logged in


    let outLogBtn = document.createElement("button");  //creates log out button 
    outLogBtn.id = "outLogBtn"                        // ID for style in css
    outLogBtn.textContent = "Log out";                  // content in logout button
    header.append(outLogBtn);                           // append logout button to header


    let mainContent = document.createElement("h1");     // creates h1 
    mainContent.id = "mainTextLoggedIn"                 // ID for style in css
    mainContent.textContent = "Welcome to the Darkside";  // maintext in h2

    main.append(mainContent);


    outLogBtn.addEventListener("click", () => {     // click logout button and localstorage will be cleared
        localStorage.clear();
        location.reload();
    });
}

if (localStorage.getItem('Username') === null) {  //if clear startpage
    startPage();
}
else {
    loggedIn();                                     // else stay logged in
}


let rightUserName = "janne";    //Username    
let rightPassWord = "test";     // Password