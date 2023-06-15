const firebaseConfig = {
  apiKey: "AIzaSyAFOUwcLsLkZlhWXFA8lnNFuUrlIAVQ2Is",
  authDomain: "pg-extension-test.firebaseapp.com",
  projectId: "pg-extension-test",
  storageBucket: "pg-extension-test.appspot.com",
  messagingSenderId: "156122766890",
  appId: "1:156122766890:web:71b484d59278a3a5fead53",
  measurementId: "G-DDR0S5GGN5"
  };
  
  
  try {firebase.initializeApp(firebaseConfig);
  }
  catch(e){
    console.log("Firebase not initialized", e);
  }
  //export default firebase;