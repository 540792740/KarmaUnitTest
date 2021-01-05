export class AuthenticationService{
    constructor(){}

    authenticate(){
        localStorage.setItem("user", "PT")
    }

    checkAuthentication(){
        return localStorage.getItem("user") == "PT";
    }
}