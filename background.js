
const blockedSites = ["pornhub.com", "xvideos.com", "redtube.com"];

chrome.storage.sync.set({ blockedSites: blockedSites }, function() {
    console.log('Blocked sites initialized:', blockedSites);
  });
/*// Replace the usage of navigator.userAgent with navigator.userAgentData
if (navigator.userAgentData) {
    console.log('User Agent: ', navigator.userAgentData.brands);
  } else {
    console.log('User Agent: ', navigator.userAgent);
  }
  
  // Replace the usage of navigator.appVersion with feature detection
  if ('appVersion' in navigator) {
    console.log('App Version: ', navigator.appVersion);
  } else {
    console.log('App Version: ', 'Unknown');
  }
  
  // Replace the usage of navigator.platform with feature detection
  if ('platform' in navigator) {
    console.log('Platform: ', navigator.platform);
  } else {
    console.log('Platform: ', 'Unknown');
  }*/
  
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log("Tab updated:", tabId, changeInfo, tab);
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
/*if (navigator.userAgentData) {
    navigator.userAgentData.getHighEntropyValues(['platform']).then(function(values) {
      var platform = values.platform;
      // Use the platform value as needed
      console.log('Platform:', platform);
    });
  }*/