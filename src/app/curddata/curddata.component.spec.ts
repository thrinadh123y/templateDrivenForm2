import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurddataComponent } from './curddata.component';

describe('CurddataComponent', () => {
  let component: CurddataComponent;
  let fixture: ComponentFixture<CurddataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurddataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
