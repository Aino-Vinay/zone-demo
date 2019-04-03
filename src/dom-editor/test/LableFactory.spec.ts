import * as $ from 'jquery';
import { TestBed } from '@angular/core/testing';
import {LableFactory} from '../LableFactory';
describe('LableFactory', () => {
    var lableObj=new LableFactory();

    beforeEach(() => TestBed.configureTestingModule({}));
  
    it('should create a lable', () => {
            var lableTest=lableObj.createElement();
            var lable = $('<lable/>')
            expect(lableTest).toEqual(lable);

    });
});