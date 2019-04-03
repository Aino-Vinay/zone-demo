
import * as $ from 'jquery';

///////////////////////////////////////////////////////////////////////////////////////////
// Title : ButtonFactory 
// Description : It is the Class which provides methods that generates the lable and may add few methods                                                                      
// Date : 29/3/2019                                                                                    
// Author: Vinay Suresh Revar
// email : vinay@ainosoft.com
////////////////////////////////////////////////////////////////////////////////////////////
export class LableFactory implements BaseFactory {

    /**
     * method name : createElement
     * description : it creates the lable element using jQuery
     */
    createElement(): any {
        var lable = $('<lable/>');
        return lable;
    }
}