import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeMembersComponent } from './free-members.component';

describe('FreeMembersComponent', () => {
  let component: FreeMembersComponent;
  let fixture: ComponentFixture<FreeMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
