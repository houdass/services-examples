import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users: User[];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }
}
