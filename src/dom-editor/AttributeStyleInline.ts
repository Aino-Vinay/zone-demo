import * as $ from 'jquery';


///////////////////////////////////////////////////////////////////////////////////////////
// Title : AttributeStyleInline 
// Description : It is the Class which provides methods that can change the attributes of the element                                                                      
// Date : 29/3/2019                                                                                    
// Author: Vinay Suresh Revar
// email : vinay@ainosoft.com
////////////////////////////////////////////////////////////////////////////////////////////
export class AttributeInlineStyle implements AttributeBase {

    /**
     * method name :reposition
     * @param element 
     * @param xcoord 
     * @param ycoord 
     * description :it accepts the element an x and y coordinates and sets the element to that position
     */

    reposition(element: any, xcoord: number, ycoord: number): any {
        console.log(xcoord);
        element.offset({ top: ycoord, left: xcoord });
        console.log(element);
        return element;
    }

     /**
      * method name :resize
      * @param element 
      * @param width 
      * @param height 
      * description :it accepts the element and height and width coordinates and sets the element to that size
      */
     resize(element, width: number, height: number): void {
         
         $(element).width(width);
         $(element).height(height);
         return element;
        
     }
}