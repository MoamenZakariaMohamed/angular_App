import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuProjectsComponent } from './ou-projects.component';

describe('OuProjectsComponent', () => {
  let component: OuProjectsComponent;
  let fixture: ComponentFixture<OuProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
