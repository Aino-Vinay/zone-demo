import { TestBed } from '@angular/core/testing';
import { MasterFactory } from '../MasterFactory';
import * as $ from 'jquery';


describe('ElementContainer', () => {
    var masterObj = new MasterFactory();

    beforeEach(() => TestBed.configureTestingModule({}));

    it('should create an element', () => {
        var buttonTest=masterObj.createElement("button");
        var button = $('<button/>');
        expect(buttonTest).toEqual(button);
        
    });

});