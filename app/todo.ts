import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

@Component({
  selector: 'todo',
  templateUrl: 'app/todo.html',
  directives: [MATERIAL_DIRECTIVES],
})
export class TodoComponent {
  //model:Object={};   
  todoArr:Array<string>=[];
  counter:number=0;
  
//todolist by two way bind  
//   onSubmit(todo?) {
//       this.todoArr.push(this.model.todo) 
//        console.log(this.todoArr);
//      }
     
   //todolist by one way bind  
     onSubmit(todo?) {
      this.todoArr.push(todo) 
       console.log(this.todoArr);
     }
     
     exists(value) {
         if(value){
        return this.counter++;
         }
         else{
        return this.counter--;
         }
      };
     
}