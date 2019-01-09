import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAngularComponent } from './header-angular.component';

describe('HeaderAngularComponent', () => {
  let component: HeaderAngularComponent;
  let fixture: ComponentFixture<HeaderAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
