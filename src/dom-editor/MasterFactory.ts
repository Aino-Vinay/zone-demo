import { ButtonFactory } from './ButtonFactory';
import { LableFactory } from './LableFactory';
import { TextBoxFactory } from './TextBoxFactory';
import { ContainerFactory } from './ContainerFactory';

///////////////////////////////////////////////////////////////////////////////////////////
// Title : MasterFactory 
// Description : It is the Class which provides methods that generates the html elements                                                                 
// Date : 29/3/2019                                                                                    
// Author: Vinay Suresh Revar
// email : vinay@ainosoft.com
////////////////////////////////////////////////////////////////////////////////////////////
export class MasterFactory{

        elementsArray={"button":new ButtonFactory(),
                        "lable":new LableFactory(),
                        "textbox":new TextBoxFactory,
                        "container":new ContainerFactory
                        };

        /**
         * method name : createElement
         * description : it is the method which accepts the element name as a string and generates that element .
         * @param elementName 
         */
         createElement(elementName:string):any{
                var elementObj=this.elementsArray[elementName];
                var element=elementObj.createElement();
                return element;
        }
}