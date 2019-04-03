
import * as $ from 'jquery';

///////////////////////////////////////////////////////////////////////////////////////////
// Title : TextBoxFactory 
// Description : It is the Class which provides methods that generates the TextBox and may add few methods                                                                      
// Date : 29/3/2019                                                                                    
// Author: Vinay Suresh Revar
// email : vinay@ainosoft.com
////////////////////////////////////////////////////////////////////////////////////////////
export class TextBoxFactory implements BaseFactory {

    /**
     * method name : createElement
     * description : it creates the text-box element using jQuery
     */
    createElement(): any {
        var textBox =  $('<input type="textbox"/>');
        return textBox;
    }
}