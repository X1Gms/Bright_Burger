import { Component, OnInit } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { ItemService } from '../../global.service';
import { SectionItem } from '../../../shared/model/sectItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'filter',
  standalone: true,
  imports: [MatIconModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit {
  constructor(
    private matIconReg: MatIconRegistry,
    public globals: ItemService
  ) {}

  ngOnInit(): void {
    this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
  }

  products: string = this.globals.Filters.product;

  minPrice: number | null = this.globals.Filters.minPrice;

  maxPrice: number | null = this.globals.Filters.maxPrice;

  SetCategory = (type: string, value: any) => {
    this.globals.SetFilters(type, value);
  };

  get sectItems(): SectionItem[] {
    return this.globals.SectItems;
  }
}
