import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

  txtvalue;
  pageList = [];
  selected = "app-editDiv";

  /*********************************** 
    Method Name: onDivSelect
    Parameter: val (Value of selected dropdown)
    Access Specifier: public
    Select the page you want to work with from dropdown
  ************************************ */
   onDivSelect(val: any) {
    $(".app-editable").hide();
    $("#" + val).show();
    }


     /*********************************** 
    Method Name: onDivAdd
    Parameter: -
    Access Specifier: public
    Click on Add button it will hide Dropdown and add button and show Text Box
  ************************************ */
   public onDivAdd() {
    $(".selectOption").hide();
    $(".addPage").hide();
    $(".addInput").show();
    $(".Sub").show();
  }


  /*********************************** 
    Method Name: addPageToSelect
    Parameter: -
    Access Specifier: public
    It Create the new  editable-div and set as current
  ************************************ */
  public addPageToSelect() {
    this.pageList.push(this.txtvalue);
    $('<div/>', {
      id: this.txtvalue,
      class: "app-editable",
      title:this.txtvalue
    }).appendTo('.grid-container');
    $(".app-editable").hide();
    this.selected=this.txtvalue;
    $("#"+this.txtvalue).show();
    $(".selectOption").show();
    $(".addPage").show();
    $(".addInput").hide();
    $(".Sub").hide();

    }


  /*********************************** 
    Method Name: appPreview
    Parameter: el
    Access Specifier: public
   Show the preview .
  ************************************ */
  appPreview(el) { 
    
  var printWindow;
  printWindow = window.open("", "", "location=1,status=1,scrollbars=1,width=1528,height=850");
  printWindow.document.write($('#app-editDiv').html());
  printWindow.document.close();
  printWindow.focus();
} 
}
