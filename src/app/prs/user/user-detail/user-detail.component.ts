import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuComponent } from "../../../misc/menu/menu.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-user-detail',
    standalone: true,
    templateUrl: './user-detail.component.html',
    styleUrl: './user-detail.component.css',
    imports: [MenuComponent, FormsModule]
})
export class UserDetailComponent {

  usrsvc = inject(UserService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  readonly = true;
  showVerifyDeleteButton = false;

  user: User = new User();

  save() {}

  remove() {
    this.usrsvc.remove(this.user.id).subscribe({
      next: (res) => {
        console.debug(res);
        this.router.navigateByUrl("/user/list");
      }
    });
  }

  toggleShowVerifyButton() {
    this.showVerifyDeleteButton = !this.showVerifyDeleteButton;
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
