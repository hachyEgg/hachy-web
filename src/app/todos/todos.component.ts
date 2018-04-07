import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';

import { TodoItem } from './interfaces/';
import { Animations, AnimationsService } from '../shared/';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})

export class TodosComponent extends Animations implements OnInit  {
  public todos: FirebaseListObservable<TodoItem[]>;
  public todo: string;

  /**
   * Constructor of the class
   *
   * @param {ActivatedRoute}    activatedRoute
   * @param {AnimationsService} animationsService
   */
  constructor(
    protected animationsService: AnimationsService,
    private activatedRoute: ActivatedRoute
  ) {
    super(animationsService);
  }

  public ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.todos = data['todos'];
    });
  }

  public getImgURL(str: String){
    console.log("YEAH" + str)
    //return "https://www.thesun.co.uk/wp-content/uploads/2016/04/1365039.main_image.jpg"
    return ("https://firebasestorage.googleapis.com/v0/b/foodiemate-41193.appspot.com/o/image%2F" + str+"?alt=media")
  }
  public addNewTodo() {
    const item = {
      todo: this.todo,
      done: false,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      updatedAt: firebase.database.ServerValue.TIMESTAMP,
    };

    this.todos.push(item);
    this.todo = '';
  }


  public remove(item: TodoItem) {
    this.todos.remove(item.$key);
  }
}
