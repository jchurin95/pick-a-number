import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPickComponent } from './user-pick.component';

describe('UserPickComponent', () => {
  let component: UserPickComponent;
  let fixture: ComponentFixture<UserPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
