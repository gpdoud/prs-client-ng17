import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuComponent]
})
export class HomeComponent {

}
