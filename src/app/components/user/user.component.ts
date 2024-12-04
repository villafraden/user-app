import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',

})
export class UserComponent implements OnInit {
title: string = 'Usuarios'
users: User[]=[];

constructor(private service: UserService){

}

ngOnInit(): void {
  this.service.findAll().subscribe(users => this.users = users);
}

}
