chrome.storage.sync.get(['blockedSites'], function(result) {
    var blockedSites = result.blockedSites;
    if (blockedSites && blockedSites.length > 0) {
      var blockedSitesList = document.getElementById('blocked-sites-list');
      blockedSites.forEach(function(site) {
        var listItem = document.createElement('li');
        var label = document.createElement('label');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'blocked-site';
        checkbox.value = site;
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(site));
        listItem.appendChild(label);
        blockedSitesList.appendChild(listItem);
      });
    }
  });


document.getElementById('remove-button').addEventListener('click', function() {
    var checkboxes = document.querySelectorAll('input[name="blocked-site"]:checked');
    var blockedSitesList = document.getElementById('blocked-sites-list');
    checkboxes.forEach(function(checkbox) {
      var listItem = checkbox.parentNode.parentNode;
      blockedSitesList.removeChild(listItem);
    });
  });
  
  document.getElementById('add-button').addEventListener('click', function() {
    var site = prompt('Enter the website URL to block:');
    if (site && site.trim() !== '') {
      var listItem = document.createElement('li');
      var label = document.createElement('label');
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = 'blocked-site';
      checkbox.value = site;
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(site));
      listItem.appendChild(label);
     
    }
});