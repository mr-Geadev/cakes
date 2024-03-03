import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietPageComponent } from 'src/app/pages/catalog/pages/diet/diet-page.component';

describe('DietComponent', () => {
  let component: DietPageComponent;
  let fixture: ComponentFixture<DietPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
