import { Injectable } from '@angular/core';
import * as $ from 'jquery';
///////////////////////////////////////////////////////////////////////////////////////////
// Title : DOM Editor Service 
// Description : It is the DOM editor service which lets the user to dynamicaly create UI                                                                                     
// Date : 23/3/2019                                                                                    
// Author: Vinay Suresh Revar
// email : vinay@ainosoft.com
////////////////////////////////////////////////////////////////////////////////////////////
@Injectable({
  providedIn: 'root'
})
export class DomEditorService {

  private domEditor;
  constructor() {
    this.domEditor = document.getElementById('');
  }


  ///////////////////////////////////////////////////////////////////////////////////////////
  // Method Name : createButton
  // Description : Dynamically creates button and returns the button created by jQuery                                  
  // Date : 23/3/2019                                                                                    
  ////////////////////////////////////////////////////////////////////////////////////////////
  
  createButton(): any {
    var button = $('<input/>').attr({ type: 'button', name: 'btn1', value: 'button', id: 'button' });
    $(button).on('click',function(){console.log("Button Clicked")});
    return button;
  }

  ///////////////////////////////////////////////////////////////////////////////////////////
  // Method Name : createInputText
  // Description : Dynamically creates input text and returns the input text created by jQuery                                  
  // Date : 23/3/2019                                                                                    
  ////////////////////////////////////////////////////////////////////////////////////////////
  
  createInputText(): any {
    var text = $('<input/>').attr({ text: 'text', name: '', placeholder: 'type here', id: 'text' });
    $(text).on('change',function(){console.log("Text Box Value Changed")});
    return text;
  }




  ///////////////////////////////////////////////////////////////////////////////////////////
  // Method Name : createLable
  // Description : Dynamically creates lable and returns the lable created by jQuery                                  
  // Date : 23/3/2019                                                                                    
  ////////////////////////////////////////////////////////////////////////////////////////////
  
  createLabel(): any {
    var label = $('<label>').text("Label");
    return label;
  }

}

