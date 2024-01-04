import { Component } from '@angular/core';
import { Menu } from './menu.class';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menus: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("Users", "/user/list"),
    new Menu("About", "/about")
  ];
}
