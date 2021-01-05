import { waitForAsync, ComponentFixture, TestBed, ComponentFixtureAutoDetect, async}  from '@angular/core/testing';
import {EmployeeComponent} from "./employee.component";
import {AuthenticationService} from "./authentication";

xdescribe("EmployeeComponent", ()=>{
    let component: EmployeeComponent;
    let fixture: ComponentFixture<EmployeeComponent>;
    let authService:AuthenticationService;
    let h1 = HTMLElement;

    beforeEach(waitForAsync(()=>{
        TestBed.configureTestingModule({
            declarations:[ EmployeeComponent ],
            providers:[AuthenticationService]
        }).compileComponents();
    }));

    beforeEach(()=>{
        fixture = TestBed.createComponent(EmployeeComponent);
        authService = TestBed.inject(AuthenticationService);
        // expect(authService.getSalarySlip()).toBe('real value');
        component = fixture.componentInstance;
        h1 = fixture.nativeElement.querrySelector("h1");
    });

    it("Should Create", ()=>{
        expect(component).toBeTruthy();
    });

    it("should Assert Value h1 to be componnet.salSlip",()=>{
        component.getSalarySlip();
        fixture.detectChanges();
        expect(h1).toContain(component.salSlip);
    })  


})