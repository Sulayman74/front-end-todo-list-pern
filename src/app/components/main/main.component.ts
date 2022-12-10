import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  tasks!: Todo[]
  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this._activatedRoute.data.subscribe(({ todos }) => {
      console.log(todos);
      this.tasks = todos
    })

  }

}
