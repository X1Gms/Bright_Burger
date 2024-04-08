import { Component } from '@angular/core';
import { Item } from '../../../shared/model/item';
import { ItemService } from '../../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mapping',
  standalone: true,
  imports: [],
  templateUrl: './mapping.component.html',
  styleUrl: './mapping.component.scss',
})
export class MappingComponent {
  constructor(public globals: ItemService, public router: Router) {}

  get items() {
    return this.globals.items;
  }

  get filterRules() {
    return this.globals.Filters;
  }

  get filteredItems(): Item[] {
    return this.globals.items.filter(
      (item) =>
        item.product.includes(this.filterRules.product) &&
        item.section === this.filterRules.category &&
        item.price > this.filterRules.minPrice &&
        item.price < this.filterRules.maxPrice
    );
  }

  EditD(id: string, data: Item) {
    this.globals.getData(id, data);
    this.router.navigate(['/edit']);
  }
}
