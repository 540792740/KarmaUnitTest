import { UserService } from '../model/user.service';
import { WelcomeComponent } from './welcome.component';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';


class MockUserService {
    isLoggedIn = true;
    user = { name: 'Test User'};
  }

  
describe('Welcome Component (Class Only)', () => {
    let component : WelcomeComponent;
    let userService : UserService;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers:[
                WelcomeComponent,
                { provide: UserService, useClass: MockUserService}
            ]
        });
        component = TestBed.inject(WelcomeComponent);
        userService = TestBed.inject(UserService);
    });

    it("should doesnot have message after constructor", ()=>{
        expect(component.welcome).toBeUndefined();
    });

    it("should contain username after ngOnInit", ()=>{
        component.ngOnInit();
        expect(component.welcome).toContain(userService.user.name)
    });

    it("not login, request login",()=>{
        userService.isLoggedIn = false;
        component.ngOnInit();
        expect(component.welcome).not.toContain(userService.user.name);
        expect(component.welcome).toContain("log in");

    })

})


xdescribe('Welcome Component', () => {
    let component:WelcomeComponent;
    let fixture : ComponentFixture<WelcomeComponent>;
    let componentUserService: UserService; // the actually injected service
    let userService: UserService; // the TestBed injected service
    let el: HTMLElement; // the DOM element with the welcome message

    let userServiceStub: Partial<UserService>;

    beforeEach(()=>{
        userServiceStub = {
            isLoggedIn : true,
            user : { name: 'Test User'},
        };
        TestBed.configureTestingModule({
            declarations:[WelcomeComponent],
            providers:[{provide:UserService, useValue:userServiceStub}],
        });

        fixture = TestBed.createComponent(WelcomeComponent);
        component = fixture.componentInstance;
        
        // UserService actually injected into the component
        userService = fixture.debugElement.injector.get(UserService);

        componentUserService = userService;

        // UserService from the root injector
        userService = TestBed.inject(UserService);

        el = fixture.nativeElement.querySelector(".welcome")
    });
    it("should welcome user", ()=>{
        fixture.detectChanges();
        const content = el.textContent;
        expect(content).toContain("Welcome")
    });

    it("should welcome peter", ()=>{
        userService.user.name = "peter";
        fixture.detectChanges();
        expect(el.textContent).toContain("peter");
    });


    it("not login, request login",()=>{
        userService.isLoggedIn = false;
        fixture.detectChanges();
        const content = el.textContent;
        expect(content).not.toContain(userService.user.name);
        expect(content).toContain("log in");
    });

    it("should inject the component's unserService instance", inject(
        [UserService],
        (service: UserService) => {
            expect(service).toBe(componentUserService);
          }
    ));

    it("TestBad and componentService should be the same", ()=>{
        expect(userService === componentUserService).toBe(true);
    })
})
