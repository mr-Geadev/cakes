import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertsPageComponent } from 'src/app/pages/catalog/pages/desserts/desserts-page.component';

describe('DessertsComponent', () => {
  let component: DessertsPageComponent;
  let fixture: ComponentFixture<DessertsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DessertsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DessertsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
