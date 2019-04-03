import * as $ from 'jquery';
import { TestBed } from '@angular/core/testing';
import {ContainerFactory} from '../ContainerFactory';
describe('ContainerFactory', () => {
    var containerObj=new ContainerFactory();

    beforeEach(() => TestBed.configureTestingModule({}));
  
    it('should create a container', () => {
            var containerTest=containerObj.createElement();
            var container = $('<div/>')
            expect(containerTest).toEqual(container);

    });



    it('should create a child in a container', () => {
        var container = $('<div/>')
        $(container).css("width", "100");
        $(container).css("height", "200");
        $( container ).offset({ top: 100, left: 200 });


        var childElement = $('<div/>')
        $(childElement).css("width", "50");
        $(childElement).css("height", "50");
        $( childElement).offset({ top: 102, left: 200 });

        containerObj.addChildElement(container,childElement);

        expect("hello").toEqual("hello");

    });
});