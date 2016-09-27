
var bg = chrome.extension.getBackgroundPage();
bg.console.log('opened dialog.js');

var redirectUri = chrome.identity.getRedirectURL('provider_cb');
var options_url = 'https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=7cr61qatqphs5nloym9tkal08in9dbi&redirect_uri=' + 
  encodeURIComponent(redirectUri) + '&scope=user_read&state=nonsense';

var options = { interactive: true, url: options_url };
bg.console.log('options are', options);

chrome.identity.launchWebAuthFlow(options, function(redirectUri) {
  bg.console.log('launchWebAuthFlow completed', chrome.runtime.lastError, redirectUri);
});

