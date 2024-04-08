import { v4 as uuidv4 } from 'uuid';

export class Item {
  constructor(
    public product: string,
    public section: string,
    public price: number,
    public imgPath: string | ArrayBuffer | null,
    public id: string = uuidv4()
  ) {}
}
