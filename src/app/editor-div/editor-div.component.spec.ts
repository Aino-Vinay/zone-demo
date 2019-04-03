import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDivComponent } from './editor-div.component';

describe('EditorDivComponent', () => {
  let component: EditorDivComponent;
  let fixture: ComponentFixture<EditorDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
