import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcPickComponent } from './pc-pick.component';

describe('PcPickComponent', () => {
  let component: PcPickComponent;
  let fixture: ComponentFixture<PcPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
