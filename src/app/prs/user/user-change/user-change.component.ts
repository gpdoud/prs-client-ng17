import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { MenuComponent } from "../../../misc/menu/menu.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-user-change',
    standalone: true,
    templateUrl: './user-change.component.html',
    styleUrl: './user-change.component.css',
    imports: [MenuComponent, FormsModule]
})
export class UserChangeComponent {

  usrsvc = inject(UserService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  readonly = false;

  user: User = new User();

  save() {
    this.usrsvc.change(this.user).subscribe({
      next: (res) => {
        console.debug(res);
        this.router.navigateByUrl("/user/list");
      }
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.usrsvc.get(id).subscribe({
      next: (res) => {
        console.debug(res);
        this.user = res;
      }
    });
  }
}
