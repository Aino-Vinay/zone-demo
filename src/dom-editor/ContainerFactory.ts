import * as $ from 'jquery';

///////////////////////////////////////////////////////////////////////////////////////////
// Title : ContainerFactory 
// Description : It is the Class which provides methods that generates the button and may add few methods                                                                      
// Date : 29/3/2019                                                                                    
// Author: Vinay Suresh Revar
// email : vinay@ainosoft.com
////////////////////////////////////////////////////////////////////////////////////////////
export class ContainerFactory implements BaseFactory {

    /**
     * method name : createElement
     * description : it creates the container element using jQuery
     */
    createElement(): any {
        var container = $('<div/>');
        return container;
    }

    addChildElement(container: any, childElement: any): any {
       
        var bodyRect = document.body.getBoundingClientRect();
        var containerRect = container.getBoundingClientRect();
        var containerTop   = containerRect.top - bodyRect.top;
        var containerLeft   = containerRect.left - bodyRect.left;


      
        var childElementRect = childElement.getBoundingClientRect();
        var childElementLeft = childElementRect.left - bodyRect.left;
        var childElementTop = childElementRect.top - bodyRect.top;


        if((childElementTop > containerTop) && ((childElementTop + $(childElementRect).height) < (childElementTop + $(childElementRect).height))){
            $(container).append($(childElement))
            console.log("we here ");
        }


        return container;
    }
}