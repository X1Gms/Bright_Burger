import { Injectable } from '@angular/core';
import { Item } from '../shared/model/item';
import { SectionItem } from '../shared/model/sectItem';

type TyFilters = {
  product: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  [key: string]: string | number | null;
};

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  items: Item[] = [
    new Item(
      'Big Tasty',
      'Burgers',
      3.65,
      '../assets/images/store/Big_Tasty.png'
    ),
    new Item(
      'Pomegranate Smoothie',
      'Drinks',
      1.85,
      '../assets/images/store/BlueBarry_Pomegranate_Smoothie.png'
    ),
    new Item(
      'BlueBarry Smoothie',
      'Drinks',
      1.8,
      '../assets/images/store/BlueBarry_Smoothie.png'
    ),
    new Item(
      'Chicken Burger',
      'Burgers',
      3.15,
      '../assets/images/store/Chicken-Burger.png'
    ),
    new Item(
      'Coca-Cola',
      'Drinks',
      1.99,
      '../assets/images/store/Coca-cola.png'
    ),
    new Item(
      'Double Burger',
      'Burgers',
      4.29,
      '../assets/images/store/Double_Burger.png'
    ),
    new Item('Fanta', 'Drinks', 1.67, '../assets/images/store/fanta.png'),
    new Item('French Fries', 'Fries', 2.05, '../assets/images/store/fries.png'),
    new Item(
      'Kitkat Ice Cream',
      'Ice Creams',
      1.85,
      '../assets/images/store/kitkat.png'
    ),
    new Item(
      'PineApple Smoothie',
      'Drinks',
      1.8,
      '../assets/images/store/Mango_PineApple_Smoothie.png'
    ),
    new Item('McCafé', 'Snacks', 0.79, '../assets/images/store/McCafé.png'),
    new Item(
      'Small French Fries',
      'Fries',
      1.39,
      '../assets/images/store/McFritas.png'
    ),
    new Item(
      'McNuggets',
      'Snacks',
      0.85,
      '../assets/images/store/McNuggets.png'
    ),
    new Item('McWrap', 'Snacks', 1.05, '../assets/images/store/McWrap.png'),
    new Item(
      'Mini Churros',
      'Snacks',
      1.24,
      '../assets/images/store/MiniChurros.png'
    ),
    new Item(
      'Oreo Blizzard',
      'Ice Creams',
      1.96,
      '../assets/images/store/Oreo_Blizzard.png'
    ),
    new Item('Sprites', 'Drinks', 1.64, '../assets/images/store/Sprites.png'),
    new Item(
      'Strawberry Ice Cream',
      'Ice Creams',
      1.84,
      '../assets/images/store/Strawberry_Ice_Cream.png'
    ),
    new Item(
      'Strawberry Smoothie',
      'Drinks',
      1.54,
      '../assets/images/store/Strawberry_Smoothie.png'
    ),
    new Item('Sundae', 'Ice Creams', 2.35, '../assets/images/store/Sundae.png'),
    new Item('Water', 'Drinks', 0.54, '../assets/images/store/Water.png'),
  ];

  OpenNavigation: boolean = false;

  transportData: any;

  Filters: TyFilters = {
    product: '',
    category: 'Burgers',
    minPrice: 0,
    maxPrice: 10,
  };

  SetFilters = (type: keyof TyFilters, change: string | number | null) => {
    this.Filters[type] = change;
  };

  SectItems: SectionItem[] = [
    { label: 'lunch_dining', name: 'Burgers' },
    { label: 'water_full', name: 'Drinks' },
    { label: 'rainy_heavy', name: 'Fries' },
    { label: 'tapas', name: 'Snacks' },
    { label: 'icecream', name: 'Ice Creams' },
  ];

  getData(id: string, data: Item) {
    this.transportData = data;
    this.transportData.id = id;
  }
}
