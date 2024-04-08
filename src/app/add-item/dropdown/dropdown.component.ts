import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'dropdown',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent implements OnInit {
  @Input() section: string = '';
  @Output() sectionChange = new EventEmitter<any>();

  isOpen = false;

  sections = ['Burgers', 'Drinks', 'Fries', 'Snacks', 'Ice Creams'];

  constructor(private matIconReg: MatIconRegistry) {}

  ngOnInit(): void {
    this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
  }

  Opening() {
    this.isOpen = !this.isOpen;
  }

  ChangingSection(word: string) {
    this.sectionChange.emit(word);
    this.Opening();
  }
}
