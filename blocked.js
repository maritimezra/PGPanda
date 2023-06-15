document.getElementById('safety-button').addEventListener('click', function() {
    chrome.tabs.create({ url: 'chrome://newtab' });
    window.close();
});
// Add a click event listener to the "override-button"
document.getElementById('override-button').addEventListener('click', function() {
    // Open Firebase Google sign-in pop-up
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(function(result) {
        // User signed in successfully
        chrome.tabs.create({ url: 'configuration.html' });
        window.close();
      })
      .catch(function(error) {
        // Handle sign-in errors
        console.error('Sign-in error:', error);
        console.error(error.message);
      });
  });
     