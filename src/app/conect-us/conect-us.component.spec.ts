import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectUsComponent } from './conect-us.component';

describe('ConectUsComponent', () => {
  let component: ConectUsComponent;
  let fixture: ComponentFixture<ConectUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConectUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConectUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
