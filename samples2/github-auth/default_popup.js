
var bg = chrome.extension.getBackgroundPage();

bg.console.log('default popup', chrome.identity);

var options_url = 'https://api.twitch.tv/kraken/oauth2/authorize?response_type=code&client_id=7cr61qatqphs5nloym9tkal08in9dbi&redirect_uri=' + encodeURIComponent(chrome.identity.getRedirectURL('provider_cb')) + '&scope=user_read&state=nonsense';

var new_options = { interactive: true, url: options_url };
bg.console.log('new options', new_options);

chrome.identity.launchWebAuthFlow(new_options, function(redirectUri) {
  bg.console.log('launchWebAuthFlow completed', chrome.runtime.lastError, redirectUri);
});

/*
params = { :access_token => 'nmz43srenqvann1nytjhzzj3gxr0ow' }
@twitch = ::Twitch.new :access_token => params[:access_token]
twitch_user = @twitch.your_user
twitch_user[:body]['email']
*/


