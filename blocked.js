document.getElementById('safety-button').addEventListener('click', function(){
    chrome.tabs.create({ url: 'whitelist.html' });
    window.close();
});

  document.getElementById('override-button').addEventListener('click', function() {
    chrome.tabs.create({ url: 'login.html' });
    window.close();
 });
  
  
     