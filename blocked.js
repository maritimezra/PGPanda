document.getElementById('safety-button').addEventListener('click', function(){
    chrome.tabs.create({ url: 'chrome://newtab' });
    window.close();
});

// Add a click event listener to the "override-button"
  
  /*document.getElementById('override-button').addEventListener('click', function() {
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
    
  });*/
  document.getElementById('override-button').addEventListener('click', function() {
    // Request Google sign-in
    chrome.identity.getAuthToken({ interactive: true }, function(token) {
      if (chrome.runtime.lastError) {
        console.error('Sign-in error:', chrome.runtime.lastError);
        return;
      }
  
      // Clear the stored token to force re-authentication
      chrome.identity.removeCachedAuthToken({ token: token }, function() {
        if (chrome.runtime.lastError) {
          console.error('Token removal error:', chrome.runtime.lastError);
          return;
        }
  
        // User has signed out, proceed with sign-in again
        chrome.identity.getAuthToken({ interactive: true }, function(newToken) {
          if (chrome.runtime.lastError) {
            console.error('Sign-in error:', chrome.runtime.lastError);
            return;
          }
  
          // User has signed in, proceed to the configuration page
          chrome.tabs.create({ url: 'configuration.html' });
          window.close();
        });
      });
    });
  });
  
  
     