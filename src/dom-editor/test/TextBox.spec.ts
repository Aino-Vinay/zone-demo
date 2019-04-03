import * as $ from 'jquery';
import { TestBed } from '@angular/core/testing';
import {TextBoxFactory} from '../TextBoxFactory';
describe('TextBoxFactory', () => {
    var textObj=new TextBoxFactory();

    beforeEach(() => TestBed.configureTestingModule({}));
  
    it('should create a Text Box', () => {
            var textBoxTest=textObj.createElement();
            var text=$('<input type="textbox"/>');
            expect(textBoxTest).toEqual(text);

    });
});