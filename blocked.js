document.getElementById('safety-button').addEventListener('click', function(){
    chrome.tabs.create({ url: 'chrome://newtab' });
    window.close();
});

  document.getElementById('override-button').addEventListener('click', function() {
    chrome.tabs.create({ url: 'login.html' });
    window.close();
 });
  
  
     