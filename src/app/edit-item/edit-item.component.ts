import { Component, OnInit } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../global.service';
import { Item } from '../../shared/model/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  standalone: true,
  imports: [MatIconModule, DropdownComponent, FormsModule],
  templateUrl: './edit-item.component.html',
  styleUrl: './edit-item.component.scss',
})
export class EditItemComponent implements OnInit {
  constructor(
    private matIconReg: MatIconRegistry,
    private globals: ItemService,
    private route: Router
  ) {}

  ngOnInit(): void {
    const isAllowed = this.Permission();
    if (!isAllowed) {
      this.route.navigate(['/']);
    }
    this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
  }

  Permission() {
    // Verificar se transportData é indefinido
    if (!this.globals.transportData) {
      return false;
    }

    // Verificar se alguma propriedade de transportData é indefinida
    for (const key in this.globals.transportData) {
      if (
        this.globals.transportData.hasOwnProperty(key) &&
        this.globals.transportData[key] === undefined
      ) {
        return false;
      }
    }

    return true;
  }

  get getData() {
    return this.globals.transportData;
  }

  section: any = this.globals.transportData?.section || '';

  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = this.getData?.imgPath || '';

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.loadImage();
  }

  number: number = this.getData?.price || 0;

  text: string = this.getData?.product || 'product';

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

  Edit(id: string) {
    let msg: string = '';
    console.log(this.section);

    if (this.text === '') {
      msg = 'Nome do Produto Não Preenchido';
    } else if (this.section === undefined) {
      msg = 'Selecione uma Secção';
    } else if (this.number <= 0) {
      msg = 'Preço Inválido';
    } else if (this.imageUrl === null) {
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

      const index = this.globals.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.globals.items[index] = new Item(
          form.product,
          form.section,
          form.price,
          form.imgUrl
        );
      }

      console.log(index);

      this.route.navigate(['/']);
    }
  }

  Delete(id: string) {
    this.globals.items = this.globals.items.filter((item) => id !== item.id);
    this.route.navigate(['/']);
  }
}
