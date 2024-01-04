import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { MenuComponent } from "../../../misc/menu/menu.component";
import { RouterModule } from '@angular/router';
import { BoolDisplayPipe } from "../bool-display.pipe";

@Component({
    selector: 'app-user-list',
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.css',
    imports: [MenuComponent, RouterModule, BoolDisplayPipe]
})
export class UserListComponent {

  usrsvc = inject(UserService);

  // could still use:
  // constructor(private usrsvc: UserService) {}

  users: User[] = [];

  ngOnInit(): void {
    this.usrsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.users = res;
      }
    });
  }
}
