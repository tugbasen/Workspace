/*eslint no-restricted-globals:0 */

import auth0 from 'auth0-js';

const SUCCESS="/gizli";
const FAIL="/";

export default class Auth{
    auth0=new auth0.WebAuth({
        domain:"dev-hksx-qpe.us.auth0.com",
        clientID:"BuaPLbs9SVTShCGSObuJ57UQbTV440Sn",
        redirectUri:"http://localhost:3000/callback",
        audience:"https://dev-hksx-qpe.us.auth0.com/userinfo",
        responseType:"token id_token",
        scope:"openid"
    });

    constructor(){
        this.login=this.login.bind(this);
    }

    login(){
        this.auth0.authorize();
    }

    handleAuthentication(){
        this.auth0.parseHash((err,authResults)=>{
            if(authResults && authResults.accessToken && authResults.idToken){
                let expiresAt=JSON.stringify((authResults.expiresIn)*1000+new Date().getTime());
                localStorage.setItem("acces=token",authResults.accessToken);
                localStorage.setItem("id_token",authResults.idToken);
                localStorage.setItem("expires_at",expiresAt);

                location.hash="";
                location.pathname=SUCCESS;

            }else if(err){
                location.pathname=FAIL;
                console.log(err);
            }
        })
    }

    isAuthenticated(){
        let expiresAt=JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime()<expiresAt;
    }

    logout(){
        localStorage.removeItem("acces_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        localStorage.pathname=FAIL;
    }

}






