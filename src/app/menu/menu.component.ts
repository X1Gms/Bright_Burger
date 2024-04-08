import { Component } from '@angular/core';
import { FilterComponent } from './filter/filter.component';
import { MappingComponent } from './mapping/mapping.component';

@Component({
  selector: 'menu',
  standalone: true,
  imports: [FilterComponent, MappingComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {}
