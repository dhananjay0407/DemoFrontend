import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarRequestComponent } from './donar-request.component';

describe('DonarRequestComponent', () => {
  let component: DonarRequestComponent;
  let fixture: ComponentFixture<DonarRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonarRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonarRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
