import { from } from "rxjs";
import { BannerComponent } from "./banner.component";
import { TestBed, ComponentFixture, waitForAsync} from '@angular/core/testing';

describe('Banner component', () => {
    let component : BannerComponent;
    let fixture : ComponentFixture<BannerComponent>;
    let h1 : HTMLElement;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[BannerComponent],
        })
        // .compileComponents();  // compile template and css

        fixture = TestBed.createComponent(BannerComponent);
        h1 = fixture.nativeElement.querySelector('h1');
        component = fixture.componentInstance;

    })

    it("No title after create",()=>{
        expect(h1.textContent).toEqual("");
    });

    it("Title display original title", ()=>{
        fixture.detectChanges();
        expect(h1.textContent).toContain(component.title)
    });

    it("Title changed", ()=>{
        component.title = "change title";
        fixture.detectChanges();
        expect(h1.textContent).toContain("change title")
    })


})
