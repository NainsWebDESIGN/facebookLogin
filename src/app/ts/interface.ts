/** 驗證完取得的AccessToken */
export interface FacebookResponse {
    // 存取伺服器驗證用的token
    access_token: string,
    // token的種類
    token_type: string,
    // 假設access_token到期，可透過refresh得到新的
    refresh_token: string,
    // access_token有效時間
    expires_in: string,
    // 一開始發送的scope要求的東西
    scope: string,
    // 需透過id_token來得知使用者是誰
    id_token: string
}
/** 傳給Facebook的參數 */
export interface FacebookToken {
    // (必填)
    // 告訴Facebook要回應authorization code
    response_type: string,
    // 頻道ID
    client_id: string,
    // 重新導向的網址(要去AppSetting的Callback URL設定)
    redirect_uri: string,
    // 防止跨站請求，要放不是URL編碼的亂數
    state: string,
    // 要求全縣的範圍，目前有profile, openid, email
    scope: string,
    // (選填)
    // 防止重複攻擊，會回傳直到IDtoken解析後的內容
    nonce: string,
    // 設定為consent後，每次登入都會要你同意權限
    prompt: string,
    // 登入的有效時間(單位:秒)，會反映在IDtoken解析後的內容
    max_age: string,
    // Facebook登入的頁面語言
    ui_locales: string,
    // 有加入chatbot的話要在權限列表一起顯示normal或是分開顯示aggressive
    bot_prompt: string
}
/** 將得到的code拿去post驗證 */
export interface PostFacebook {
    // 授權的型態(目前官方只有這個)
    grant_type: string,
    // 傳回來的驗證碼
    code: string,
    // 重新導向的網址(要去AppSetting的Callback URL設定)
    redirect_uri: string,
    // 頻道ID
    client_id: string,
    // 頻道密鑰
    client_secret: string
}
/** 各種Facebook的網址或api */
export interface FacebookHref {
    // 傳送給Facebook aouth取得驗證碼的網址
    URL: string,
    // 呼叫Facebook API的網址
    API: string
}
// id_token解析後的格式
export interface JwtFacebookToken {
    // 簽發者
    iss: string,
    // 代表方
    sub: string,
    // 接收者
    aud: string,
    // token過期時間
    exp: string,
    // token簽發時間
    iat: string,
    // 防止重複攻擊，再登入時給的參數nonce
    nonce: string,
    // 登入方式(pwd 帳號密碼登入, Facebookqr 用QR code登入, Facebooksso 用以存在的帳密登入，意即曾登入過)
    amr: string[],
    // 帳號名稱
    name: string,
    // 大頭貼的網域位置
    picture: string,
    // 身分驗證時的時間
    auth_time: string
}