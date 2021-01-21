import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService{
    constructor(){}

    authenticate(){
        localStorage.setItem("user","Peter")
    }

    checkAuthenticate(){
        return (localStorage.getItem("user") === "Peter")
    }
}