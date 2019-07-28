import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinaComponent } from './dina.component';

describe('DinaComponent', () => {
  let component: DinaComponent;
  let fixture: ComponentFixture<DinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
