import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import {DomEditorService} from '../dom-editor.service'
import { EditorDivComponent } from '../editor-div/editor-div.component';

@Component({
  selector: 'app-pagelist',
  templateUrl: './pagelist.component.html',
  styleUrls: ['./pagelist.component.scss']
})
export class PageListComponent implements OnInit {

  constructor(private domEditorService:DomEditorService,private editorDiv:EditorDivComponent){}
  ngOnInit() {
  }

  onButtonElementSelect() {
    var button=this.domEditorService.createButton();
    $("#app-editDiv").append(button);
    this.editorDiv.zoneAction();
 }

 onTextElementSelect(){
   var text= this.domEditorService.createInputText();
   $("#app-editDiv").append(text);
   this.editorDiv.zoneAction();

 }

 onLableElementSelect(){
   var lable= this.domEditorService.createLabel();
   $("#app-editDiv").append(lable);

 }

  



}
