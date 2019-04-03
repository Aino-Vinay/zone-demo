import * as $ from 'jquery';
import { TestBed } from '@angular/core/testing';
import {ButtonFactory} from '../ButtonFactory';
describe('ElementButton', () => {
    var buttonObj=new ButtonFactory();

    beforeEach(() => TestBed.configureTestingModule({}));
  
    it('should create a button', () => {
            var btnTest=buttonObj.createElement();
            var button = $('<button/>')
            expect(btnTest).toEqual(button);

    });
});