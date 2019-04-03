import { TestBed } from '@angular/core/testing';
import * as $ from 'jquery';

import { DomEditorService } from './dom-editor.service';

describe('DomEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DomEditorService = TestBed.get(DomEditorService);
    expect(service).toBeTruthy();
  });

  it('should create a button', () => {
    const service: DomEditorService = TestBed.get(DomEditorService);

    var button = $('<input/>').attr({ type: 'button', name:'btn1', value:'button' ,id:'button' });
      expect(service.createButton()).toEqual(button);
  });

  it('should create a input text', () => {
    const service: DomEditorService = TestBed.get(DomEditorService);

    var text = $('<input/>').attr({ text: 'text', name:'', placeholder:'type here' ,id:'text' });
      expect(service.createInputText()).toEqual(text);
  });



  it('should create a lable', () => {
    const service: DomEditorService = TestBed.get(DomEditorService);

    var label = $('<label>').text("Label");
    expect(service.createLabel()).toEqual(label);
  });





});
