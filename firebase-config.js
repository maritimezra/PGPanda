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
  