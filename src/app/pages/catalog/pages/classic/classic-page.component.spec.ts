import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicPageComponent } from 'src/app/pages/catalog/pages/classic/classic-page.component';

describe('ClassicComponent', () => {
  let component: ClassicPageComponent;
  let fixture: ComponentFixture<ClassicPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
