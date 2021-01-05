import { Component, OnInit} from "@angular/core";
import { AuthenticationService } from './authentication';

@Component({
    selector:"app-employee",
    templateUrl:"./employee.component.html"
})

export class EmployeeComponent implements OnInit{

    salSlip: string;
    
    constructor(private authService: AuthenticationService){
        this.authService.authenticate();
        this.salSlip = '';
    }
    ngOnInit(){}

    getSalarySlip(){
        if(this.authService.checkAuthentication()){
            this.salSlip = "Salary Slip";
        } else {
            this.salSlip = "No Authtication!"
        }
    }
}