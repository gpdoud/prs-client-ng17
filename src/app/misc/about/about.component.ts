import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [MenuComponent]
})
export class AboutComponent {

}
