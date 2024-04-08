import { Component, OnInit } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../global.service';
import { Item } from '../../shared/model/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [MatIconModule, DropdownComponent, FormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss',
})
export class AddItemComponent implements OnInit {
  constructor(
    private matIconReg: MatIconRegistry,
    private globals: ItemService,
    private route: Router
  ) {}

  section: any;

  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.loadImage();
  }

  number: number = 0;

  text: string = '';

  msgError: string = '';

  loadImage() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  ngOnInit(): void {
    this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
  }

  SendRequest() {
    let msg: string = '';

    if (this.text === '') {
      msg = 'Nome do Produto Não Preenchido';
    } else if (this.section === undefined) {
      msg = 'Selecione uma Secção';
    } else if (this.number <= 0) {
      msg = 'Preço Inválido';
    } else if (this.selectedFile === null) {
      msg = 'Selecione uma Imagem';
    } else {
      msg = '';
    }

    this.msgError = msg;

    if (msg === '') {
      const form = {
        product: this.text,
        section: this.section,
        price: this.number,
        imgUrl: this.imageUrl,
      };

      this.globals.items.push(
        new Item(form.product, form.section, form.price, form.imgUrl)
      );

      this.route.navigate(['/']);
    }
  }
}
