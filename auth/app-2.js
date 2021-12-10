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

let signOutButton = document.getElementById("signout")

signOutButton.addEventListener("click",(e) => {
    e.preventDefault()

    auth.signOut()
    alert("signout")
    window.location = "index.html"

})