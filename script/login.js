const appSecret = '13ae4d829eba9f8d771a8875ca0385bc';
const appId = '3593112904254172';
window.fbAsyncInit = function() {
    FB.init({
        appId      : '3593112904254172',
        cookie     : true,
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