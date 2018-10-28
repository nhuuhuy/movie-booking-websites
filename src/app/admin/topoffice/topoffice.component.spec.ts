import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopofficeComponent } from './topoffice.component';

describe('TopofficeComponent', () => {
  let component: TopofficeComponent;
  let fixture: ComponentFixture<TopofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
