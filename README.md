## New Angular Unit Test Module

#### angular.json
* main.ts: entry test 
* karma.conf.js: Initial config of Karma
* test.ts: load all .spec, required by karma.conf.js

#### Karma and Jasmine
* Karma: container of test script, we have karma.conf.js in root file.
* Jasmine: tools, like it, describe, expect, make our test seems like read an article. we could define how our unit test run.

#### Format:
* first x means disabled
```
describe("Test contain", ()=>{
    xit("contain",()=>{
        let equalString = "abc";
        expect(equalString).toContain( "a");
    })
})
```

#### Method:
* expect("a").toBe("a");
* expect("a").toEqual("a");
* expect("a").toMatch("a");
* expect([1,2]).toContain(1);
* expect(true).toBeTruthy();
* beforeEach(()=>{}) 
* beforeAll, afterAll, afterEach;

#### Arrange, Act, Assert(AAA) pattern
* Arrange: arrange everything to setup unit test
* Act: executed necessary functionality that need to be unit test
* Assert: Verify the functionality/method given the result as we expect

#### TestBed
* One of main unitilies for unit test components
* TestBed create dynamicly-constructed Angular test module: @NgModule
* it also provide methods for creating components and services for unit test cases.
* support SPY and async

* configureTestingModule
    ```
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            declarations: [TestComponent]
        });
    });
    ```
* createComponent, return a fixture
    ```
    @Component({
        template: `<trade-view [id]="id" (close)="_close()"></trade-view>`
        })
    class TestComponent {
            id: number = 0;
            _close() { }
        }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            declarations: [TestComponent]
        });
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance; 
        el = fixture.nativeElement; 
    });
    ```

#### CSS
* import { By } from '@angular/platform-browser';
    
    ```
    des = fixture.debugElement.queryAll(By.directive(HighlightDirective));
    it('should color 1st <h2> background "yellow"', () => {
        const bgColor = des[0].nativeElement.style.backgroundColor;
        expect(bgColor).toBe('yellow');
    });
    
    it('bare <h2> should not have a customProperty', () => {
        expect(bareH2.properties.customProperty).toBeUndefined();
    });
    ```

#### Get and Set Test
* Call with Get and Set
    ```
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
    ```
* By Testing Following Code
    ```
        const person = new Person('John', 'Doe');
        person.fullName; -> call without ()

        const spy = spyOnProperty(person, 'fullName');
        const spy = spyOnProperty(person, 'fullName','get').and.turnValue("return Value");

        const result = person.fullName;
        expect(spy).toHaveBeenCalled();
    ```