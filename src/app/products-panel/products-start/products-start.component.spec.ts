import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsStartComponent } from './products-start.component';

describe('ProductsStartComponent', () => {
  let component: ProductsStartComponent;
  let fixture: ComponentFixture<ProductsStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
