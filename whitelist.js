document.getElementById('proceed-button').addEventListener('click', function(){
    chrome.tabs.create({ url: 'chrome://newtab' });
    window.close();
});


chrome.storage.sync.get(['whiteList'], function(result) {
    var whiteList = result.whiteList;
    if (whiteList && whiteList.length > 0) {
      var whiteListSites = document.getElementById('whitelisted-sites-list');
      whiteList.forEach(function(site) {
        var listItem = document.createElement('li');
        var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'whitelist-site';
            checkbox.value = site;
            listItem.appendChild(checkbox);

            var link = document.createElement('a');
            link.href = site;
            link.target = '_blank';
            link.textContent = site;
            listItem.appendChild(link);

            whiteListSites.appendChild(listItem);
      });
    }
    
  });
  document.getElementById('add-button').addEventListener('click', function() {
    var site = prompt('Enter the website URL to block:');
    if (site && site.trim() !== '') {
      var listItem = document.createElement('li');
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = 'whitelist-site';
      checkbox.value = site;
      listItem.appendChild(checkbox);

       var link = document.createElement('a');
            link.href = site;
            link.target = '_blank';
            link.textContent = site;
            listItem.appendChild(link);

      var whiteListSites = document.getElementById('whitelisted-sites-list');
      whiteListSites.appendChild(listItem);
    }
});

document.getElementById('remove-button').addEventListener('click', function() {
    var whitelistedSitesList = document.getElementById('whitelisted-sites-list');
    var checkedItems = whitelistedSitesList.querySelectorAll('input[type="checkbox"]:checked');
    checkedItems.forEach(function(checkbox) {
        var listItem = checkbox.parentNode;
        whitelistedSitesList.removeChild(listItem);
    });
});

