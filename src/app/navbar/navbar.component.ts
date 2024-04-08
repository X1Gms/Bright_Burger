import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemService } from '../global.service';

@Component({
  selector: 'navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [RouterLink],
  styleUrl: '../app.component.scss',
})
export class NavbarComponent {
  constructor(public globals: ItemService) {}

  Revert() {
    this.globals.OpenNavigation = !this.globals.OpenNavigation;
  }
}
