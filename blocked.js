document.getElementById('safety-button').addEventListener('click', function(){
    chrome.tabs.create({ url: 'chrome://newtab' });
    window.close();
});
// Add a click event listener to the "override-button"
  
document.getElementById('override-button').addEventListener('click', function() {
  // Clear user's authentication state
  firebase.auth().signOut().then(function() {
    // User signed out successfully
    // Request Google sign-in
    chrome.identity.getAuthToken({ interactive: true }, function(token) {
      if (chrome.runtime.lastError) {
        console.error('Sign-in error:', chrome.runtime.lastError);
        return;
      }
  
      // User has signed in, proceed to the configuration page
      chrome.tabs.create({ url: 'configuration.html' });
      window.close();
    });
  }).catch(function(error) {
    console.error('Sign-out error:', error);
  });
});
  
     