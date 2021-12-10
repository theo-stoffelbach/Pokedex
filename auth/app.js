const firebaseConfig = {
    apiKey: "AIzaSyBZqiKxOaKx5oE02MGxUEpjxj0n8CxhhLQ",
    authDomain: "pokedex-b1691.firebaseapp.com",
    databaseURL: "https://pokedex-b1691-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pokedex-b1691",
    storageBucket: "pokedex-b1691.appspot.com",
    messagingSenderId: "760827219857",
    appId: "1:760827219857:web:88f7ec617af58638fa9430",
    measurementId: "${config.measurementId}"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//Signup function for
let signUpButton = document.getElementById("signin")
signUpButton.addEventListener("click", (e) => {
    //Prevent default behavor
    e.preventDefault()
   

    var email = document.getElementById("inputemail")
    var password = document.getElementById("inputpassword")
   
    auth.createUserWithEmailAndPassword(email.value, password.value).then((userCredential) => {
        location.reload();
        // SIgned in 
        var user = userCredential.user;
        console.log("user", user.email)
    })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error code", errorCode)
            console.log("error Message", errorMessage)
        });
})

let signInButton = document.getElementById('signin')
signInButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    console.log("clicked")

    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")

    auth.signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // location.reload();
            // Signed in 
            var user = userCredential.user;
            console.log("user", user.email)
            window.location = "dash.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // alert("error code", errorCode)
            alert(errorMessage)
        });
})

//Lifecycle hooks
auth.onAuthStateChanged(function (user) {
    if (user) {

        var email = user.email

        var users = document.getElementById("user")
        var text = document.createTextNode(email);

        users.appendChild(text);

        console.log(users)
        //is signed in
    } else {
        //no user signed in
    }
})