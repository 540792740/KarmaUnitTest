import { Component, OnInit} from "@angular/core";
import { AuthenticationService } from '../Service/authentication.service';

@Component({
    selector:"app-employee",
    templateUrl:"./employee.component.html",
    styleUrls:["./employee.component.css"]
})

export class EmployeeComponent implements OnInit{

    // salSlip: string;
    
    constructor(private authService: AuthenticationService){
        this.authService.authenticate();
        // this.salSlip = '';
    }
    ngOnInit(){}

    getSalarySlip(){
        if(this.authService.checkAuthenticate()){
            return "Salary Slip"
            
            // this.salSlip = "Salary Slip";
        } else {
            console.log("No Authentication!");
            // this.salSlip = "No Authtication!"
        }
    }
}