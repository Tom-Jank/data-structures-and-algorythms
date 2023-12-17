import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { DataStructuresComponent } from './main-page/data-structures/data-structures/data-structures.component';
import { HashMapComponent } from './main-page/data-structures/hash-map/hash-map.component';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: 'data-structures',
        component: DataStructuresComponent
    },
    {
        path: '1',
        component: HashMapComponent
    }
];