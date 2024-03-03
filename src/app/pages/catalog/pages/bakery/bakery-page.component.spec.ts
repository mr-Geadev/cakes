import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryPageComponent } from 'src/app/pages/catalog/pages/bakery/bakery-page.component';

describe('BakeryComponent', () => {
  let component: BakeryPageComponent;
  let fixture: ComponentFixture<BakeryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakeryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BakeryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
