import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationMenuComponent } from "./shared/components/navigation-menu/navigation-menu.component";
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, NavigationMenuComponent, FooterComponent]
})
export class AppComponent {
  title = 'data-structures-and-algorithms';
}
