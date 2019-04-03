import { Component, OnInit } from '@angular/core';
import 'zone.js'
import * as $ from 'jquery'

@Component({
  selector: 'app-editor-div',
  templateUrl: './editor-div.component.html',
  styleUrls: ['./editor-div.component.scss']
})
export class EditorDivComponent implements OnInit {
  constructor() { }

  ngOnInit() {
   
  }

  zoneAction():void{
        var eventtask:any=[];
        var myZone=Zone.current.fork({
          name:'myZone',
          ///////////////////////////////////
          onScheduleTask(delegate, currentZone, targetZone, task) {
            const result = delegate.scheduleTask(targetZone, task);
            eventtask.push(task);
            console.log(task.type ,"", task.source);
            console.log(eventtask)
            const name = task.callback.name;
            console.log(`task with callback '${name}' is added to the task queue`);
            return result;
          },
          onInvokeTask(delegate, currentZone, targetZone, task, ...args) {
            const result = delegate.invokeTask(targetZone, task,...args);
            const name = task.callback.name;
            console.log(  `task with callback '${name}' is removed from the task queue`);
            return result;
          }


          /////////////////////////////////
        });
        
        myZone.run(()=>{
          
          document.getElementById("app-editDiv").addEventListener("click",a1);
    
        });

        function a1(){
            console.log("div called");
        }
  }

}
