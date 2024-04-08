import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';

export const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'add', component: AddItemComponent },
  { path: 'edit', component: EditItemComponent },
];
