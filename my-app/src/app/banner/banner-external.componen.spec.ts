import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { from } from 'rxjs';
import {BannerComponent} from "./banner-external.component";

describe('Banner external component', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let h1 : HTMLElement;

  describe('Two BeforeEach', () => {
    beforeEach(waitForAsync(()=>{
      TestBed.configureTestingModule({
        declarations:[BannerComponent]
      })
      .compileComponents(); // compile template and css
    }));

    beforeEach(()=>{
        fixture = TestBed.createComponent(BannerComponent);
        component = fixture.componentInstance;

        h1 = fixture.nativeElement.querySelector("h1");
    });

    tests();
    
  });

  describe('One BeforeEach', () => {
    beforeEach(waitForAsync(()=>{
      TestBed.configureTestingModule({
        declarations:[BannerComponent],
      }).compileComponents()
      .then(()=>{
        fixture= TestBed.createComponent(BannerComponent);
        component = fixture.componentInstance;
        h1 = fixture.nativeElement.querySelector('h1');
      })
    }))
    tests();
  })
  
  function tests(){

    it("No Title untill call `detectiveChange`", ()=>{
      expect(h1.textContent).toEqual('');
    });

    it("should display origin title", ()=>{
      fixture.detectChanges();
      expect(h1.textContent).toContain(component.title);
    });

    it("should display different title when change title", ()=>{
      component.title = "change title";
      fixture.detectChanges();
      expect(h1.textContent).toContain("change title");
    });
    
  }

})
