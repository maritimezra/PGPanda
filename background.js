chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.get(['registered'], function(result) {
    var registered = result.registered;
    if (!registered) {
      chrome.tabs.create({ url: ('signup.html') });
    }
    if(registered) {
      chrome.tabs.create({ url: ('login.html') });
    }
  });
});

const blockedSites = [
  "https://www.instagram.com/","https://www.tiktok.com/",
  "https://www.pornhub.com/", "https://www.xvideos.com/", 
  "https://www.redtube.com/"
];

const whiteList=[
  "https://www.youtubekids.com/",
  "https://www.nationalgeographickids.com/",
  "https://pbskids.org/",
  "https://kids.nationalgeographic.com/",
  "https://www.funbrain.com/",
  "https://www.coolmath4kids.com/",
  "https://kids.nationalgeographic.com/",
  "https://www.highlightskids.com/",
  "https://www.seussville.com/",
  "https://www.discoverymindblown.com/"
];


chrome.storage.sync.set({ blockedSites: blockedSites }, function() {
    console.log('Blocked sites initialized:', blockedSites);
  });

  chrome.storage.sync.set({ whiteList: whiteList }, function() {
    console.log('Whitelist sites initialized:', whiteList);
  });
  
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  
  if (changeInfo.url) {
    // Check if the URL is blocked
    chrome.storage.sync.get(['blockedSites'], function(result) {
      var blockedSites = result.blockedSites;
      if (blockedSites && blockedSites.includes(changeInfo.url)) {
        // Redirect to a blocked page
        chrome.tabs.update(tabId, { url: "blocked.html" });
      }
    }); 
  }
});
