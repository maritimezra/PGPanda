chrome.storage.sync.get(['whiteList'], function(result) {
    var whiteList = result.whiteList;
    if (whiteList && whiteList.length > 0) {
      var whiteListSites = document.getElementById('whitelisted-sites-list');
      whiteList.forEach(function(site) {
        var listItem = document.createElement('li');
        
        var link = document.createElement('a');
        link.href = site;
        link.target = '_blank';
        link.textContent = site;
        
        listItem.appendChild(link);
        whiteListSites.appendChild(listItem);
      });
    }
  });

document.getElementById('configure-button').addEventListener('click', function() {
    chrome.tabs.create({ url: 'whitelist-config.html' });
    window.close();
});

document.getElementById('close-button').addEventListener('click', function() {
    chrome.tabs.create({ url: 'chrome://newtab' });
    window.close();
});