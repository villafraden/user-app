import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User []= [{

    id:1,
    name:'Nelson Villafrade',
    email: 'villafraden@gmail.com',
    direccion:'Cra 74A N 80 -57', 
    username: 'nelson.villafrade', 
    password: '12345'

  },
  {

    id:1,
    name:'Nestor Villafrade',
    email: 'villafradenes@gmail.com',
    direccion:'Cra 74A N 80 -57', 
    username: 'nelson.villafrade', 
    password: '12345'

  }
];

  constructor() { }

  findAll(): Observable<User[]>{
    return of(this.users);
  }
}
