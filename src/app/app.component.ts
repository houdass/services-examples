import {Component, Inject} from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users: User[];

  constructor(@Inject(UserService) private userService: any) {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }
}

// @Inject(UserService) private userService: any
// = @Inject(UserService) private userService: UserService
// = private userService: UserService
