import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HighlightDirective } from "../shared/highlight.directive";
import { AboutComponent } from "./about.component";

let fixture : ComponentFixture<AboutComponent>;

describe('AboutComponent', () => {
    beforeEach(()=>{
        fixture = TestBed.configureTestingModule({
            declarations:[AboutComponent, HighlightDirective],
        }).createComponent(AboutComponent);
        fixture.detectChanges();
    })

    it("should have skyblue <h2>", ()=>{
        const h2 : HTMLElement = fixture.nativeElement.querySelector("h2");
        const bgColor = h2.style.backgroundColor;
        expect(bgColor).toBe('skyblue')
    })
})

