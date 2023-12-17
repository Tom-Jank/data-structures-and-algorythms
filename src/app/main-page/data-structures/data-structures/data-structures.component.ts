import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/components/card-component/card.component';
import { NgFor } from '@angular/common';
import { DataStructureCard } from '../../../shared/interfaces/data-structure.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-structures',
  standalone: true,
  imports: [ CardComponent, NgFor, RouterLink ],
  templateUrl: './data-structures.component.html',
  styleUrl: './data-structures.component.scss'
})
export class DataStructuresComponent {
  cards: DataStructureCard[] = [
    {id: 1, title:'Hash Map', content: 'Learn about hash maps!', image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221220111537/ComponentsofHashing.png'},
    {id: 2, title:'Linked List', content: 'Learn about linked lists!', image: 'https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1644309661084-Linked%20list-03.png'}
  ];
}