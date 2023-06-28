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


function registerUser() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      var user = userCredential.user;
      console.log('Registered user:', user);
      chrome.storage.sync.set({ registered: true }, function() {});;
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
      var user = userCredential.user;
      console.log('Logged in user:', user);
      chrome.tabs.create({ url: 'configuration.html' });
      window.close();
    })

    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error('Login error:', errorCode, errorMessage);
      alert('Incorrect email/password');
    });
}

window.addEventListener('DOMContentLoaded', function() {
  var signupButton = document.getElementById('signup-button');
  if (signupButton) {
    signupButton.addEventListener('click', function(event) {
      event.preventDefault(); 
      registerUser();
    });
  }

  var loginButton = document.getElementById('login-button');
  if (loginButton) {
    loginButton.addEventListener('click', function(event) {
      event.preventDefault(); 
      loginUser();
    });
  }
});
  