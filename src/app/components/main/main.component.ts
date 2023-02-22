import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { forkJoin, lastValueFrom, take } from 'rxjs';

import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  myUser !: any
  tasks!: Todo[]
  users!: User[];
  newTask: any | number[] = []
  todo!: any
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _todoService: TodoService,
    private _router: Router) { }

  ngOnInit(): void {

    this._activatedRoute.data.subscribe(({ users }) => {
      return this.users = users

    })
    this._activatedRoute.data.subscribe(({ todos }) => {

      return this.tasks = todos

    })

  }

  onDisconnect() {
    this._userService.clearToken()
    this._router.navigate(['/'])
  }
  onTest() {
    let observable1$ = this._userService.getProfile()
    let observable2$ = this._todoService.getTodos()

    forkJoin([observable1$, observable2$]).subscribe(([users, taches]) => {
      this.myUser = users.datas.firstname + ' ' + users.datas.lastname;

      this.newTask = taches.filter((val: any) => {
        if (val.user_id == users.datas.user_id) {
          console.log("test hello");
          return this.newTask = val
        }
      })



    });

  }
}


// forkJoin([dataServiceObs$, userServiceObs$]).subscribe(([contrats, workers]) => {
//   this.mesContrats = contrats.contracts;
//   let tableau = this.mesContrats.map((value: any) => {
//     this.entreprise = value.entreprise_id
//     return this.entreprise
//   });
//   this.onlyMyContracts = this.mesContrats.filter((val: any) => {
//     if (val.entreprise_id == this.society.entreprise_id) {
//       return this.onlyMyContracts = val
//     }
//   })
//   this.contratTab = [...this.onlyMyContracts]
//   let tableauWorker = workers.salaries.map((value: any) => {
//     this.salarie = value
//     console.log("test", this.onlyMyContracts[0].salarie_id, value.salarie_id);
//     if (value.salarie_id == this.onlyMyContracts[0].salarie_id) {
//       console.log("le salarie correspondant", this.salarie);
//     }
//     return this.salarie
//   })
// });