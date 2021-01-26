import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';

import { MarbleTestComponent } from './marble-test.component';
import { MarbleTestService } from './marble-test.service';


const mockProductList = [{
  "title": "Brown eggs",
  "type": "dairy",
  "description": "Raw organic brown eggs in a basket",
  "filename": "0.jpg",
  "height": 600,
  "width": 400,
  "price": 28.1,
  "rating": 4
}, {
  "title": "Sweet fresh stawberry",
  "type": "fruit",
  "description": "Sweet fresh stawberry on the wooden table",
  "filename": "1.jpg",
  "height": 450,
  "width": 299,
  "price": 29.45,
  "rating": 4
}, {
  "title": "Asparagus",
  "type": "vegetable",
  "description": "Asparagus with ham on the wooden table",
  "filename": "2.jpg",
  "height": 450,
  "width": 299,
  "price": 18.95,
  "rating": 3
}];

describe('MarbleTestComponent', () => {
  let component: MarbleTestComponent;
  let fixture: ComponentFixture<MarbleTestComponent>;
  let mockList = mockProductList;
  let testService: MarbleTestService;


  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [MarbleTestComponent],
      providers: [MarbleTestService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarbleTestComponent);
    component = fixture.componentInstance;
   testService = TestBed.get(MarbleTestService);
  });

  it("testing subscription is called",fakeAsync(()=>{
    let productSpy = spyOn(testService, "getProductList").and.returnValue(of(mockList));
    let subSpy = spyOn(testService.getProductList(), "subscribe");
    component.ngOnInit();
    tick();
    expect(productSpy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();
  }));

  it("testing execution within subscribe method",fakeAsync(()=>{
    component.ngOnInit();
    expect(component.tempProductList).toBeDefined();
    expect(component.tempProductList.length).toBeGreaterThan(5);
  }));


});
