import handler, {getAppAccessToken} from "./profileInfo.js";

window.fbAsyncInit = () => {
    FB.init({
        appId      : '1069626954415267',
        xfbml      : true,
        version    : 'v18.0'
    });
    FB.AppEvents.logPageView();
};

const checkLoginState = async () => {
    FB.getLoginStatus(async (response) => {
        console.log(response);
        const res = await getAppAccessToken();
        console.log(res);

    }, {
        scope: 'public_profile'
    });
}

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

document.getElementById('login-button').addEventListener('click', function() {
    checkLoginState();
});