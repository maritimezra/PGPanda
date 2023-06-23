//import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVXDQVIiL7pU5UXAhbBH_Yah3w1V910oU",
  authDomain: "pgpanda--auth.firebaseapp.com",
  databaseURL: "https://pgpanda--auth-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pgpanda--auth",
  storageBucket: "pgpanda--auth.appspot.com",
  messagingSenderId: "127198853640",
  appId: "1:127198853640:web:622c23dfb286ece3f76fbd"
  };
  
  
  try {firebase.initializeApp(firebaseConfig);
  }
  catch(e){
    console.log("Firebase not initialized", e);
  }

  // Rest of your code...

function registerUser() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      // User registration successful
      var user = userCredential.user;
      console.log('Registered user:', user);
      //alert("Registration Successful!");
      chrome.tabs.create({ url: 'login.html' });
      window.close();
    })
    .catch(function(error) {
      // Handle registration errors
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error('Registration error:', errorCode, errorMessage);
    });
}

function loginUser() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      // User login successful
      var user = userCredential.user;
      console.log('Logged in user:', user);
      //alert("Log in successful")
      chrome.tabs.create({ url: 'configuration.html' });
      window.close();
    })
    .catch(function(error) {
      // Handle login errors
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error('Login error:', errorCode, errorMessage);
    });
}

window.addEventListener('DOMContentLoaded', function() {
  var signupButton = document.getElementById('signup-button');
  if (signupButton) {
    signupButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevents the form from submitting normally
      registerUser();
    });
  }

  var loginButton = document.getElementById('login-button');
  if (loginButton) {
    loginButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevents the form from submitting normally
      loginUser();
    });
  }
});
  