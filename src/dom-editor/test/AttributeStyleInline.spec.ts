import * as $ from 'jquery';
import { TestBed } from '@angular/core/testing';
import { MasterFactory } from '../MasterFactory';
import { AttributeInlineStyle } from '../AttributeStyleInline';


describe('AttributeInlineStyle', () => {
    var attributeInlineStyle = new AttributeInlineStyle();
    var masterfactoryObj = new MasterFactory();
    beforeEach(() => TestBed.configureTestingModule({}));



    it('should be able to reposition the element', () => {
        var button = $('<button/>');
        button.offset({ top: 30, left: 120 });
        
        var buttonTest=masterfactoryObj.createElement("button");
        var modifiedObj=attributeInlineStyle.reposition(buttonTest, 120, 30);
        
        expect(modifiedObj).toEqual(button);
    });

    it('should be able to resize the element', () => {
        
        var buttonTest=masterfactoryObj.createElement("button");
        var modifiedObj=attributeInlineStyle.resize(buttonTest, 120, 30);
        expect($(modifiedObj).height()).toEqual(30);
        expect($(modifiedObj).width()).toEqual(120);
    });

});