import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadPage } from 'src/app/pages/catalog/pages/bread/bread-page.component';

describe('BreadComponent', () => {
  let component: BreadPage;
  let fixture: ComponentFixture<BreadPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
