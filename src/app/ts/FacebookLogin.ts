import { FacebookToken, PostFacebook, FacebookHref } from '@ts/interface';
export const facebookToken: FacebookToken = {
    response_type: "code",
    client_id: "1656581706",
    redirect_uri: "http://localhost:2862/",
    state: "shizuna1223",
    scope: "profile%20openid&nonce=helloNains",
    nonce: "helloNains",
    prompt: "consent",
    max_age: "241000",
    ui_locales: "zh-tw",
    bot_prompt: "normal"
}
export const postFacebook: PostFacebook = {
    grant_type: "authorization_code",
    code: "",
    redirect_uri: "http://localhost:4200/",
    client_id: "1656581706",
    client_secret: "7d2925249d520496049ee32ed7a25628"
}
export const facebookHref: FacebookHref = {
    URL: "https://www.facebook.com/v12.0/dialog/oauth??",
    API: "https://api.Facebook.me/oauth2/v2.1/token"
}