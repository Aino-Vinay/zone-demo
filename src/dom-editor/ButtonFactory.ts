import * as $ from 'jquery';

///////////////////////////////////////////////////////////////////////////////////////////
// Title : ButtonFactory 
// Description : It is the Class which provides methods that generates the button and may add few methods                                                                      
// Date : 29/3/2019                                                                                    
// Author: Vinay Suresh Revar
// email : vinay@ainosoft.com
////////////////////////////////////////////////////////////////////////////////////////////
export class ButtonFactory implements BaseFactory {

    /**
     * method name : createElement
     * description : it creates the button element using jQuery
     */
    createElement(): any {
        var button = $('<button/>');
        return button;
    }
}