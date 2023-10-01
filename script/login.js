const appSecret = 'b628d2387c6059306d1e7a1fe460b7e5';
const appId = '1069626954415267';
window.fbAsyncInit = function() {
    FB.init({
      appId      : '1069626954415267',
      xfbml      : true,
      version    : 'v18.0'
    });
    FB.AppEvents.logPageView();
  };

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        console.log(response);
        // statusChangeCallback(response);
    });
}
(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));