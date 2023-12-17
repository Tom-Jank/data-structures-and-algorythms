import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [MatCardModule, MatRippleModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() content: string = '';

}
