import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { MenuComponent } from "../../../misc/menu/menu.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-user-create',
    standalone: true,
    templateUrl: './user-create.component.html',
    styleUrl: './user-create.component.css',
    imports: [MenuComponent, FormsModule]
})
export class UserCreateComponent {

  usrsvc = inject(UserService);
  router = inject(Router);
  readonly = false;

  user: User = new User();

  save(): void {
    this.usrsvc.create(this.user).subscribe({
      next: (res) => {
        console.debug(res);
        this.router.navigateByUrl("/user/list");
      }
    });
  }
}
