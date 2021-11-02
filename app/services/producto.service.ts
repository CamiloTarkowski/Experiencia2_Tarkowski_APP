import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';

export interface Productos{
  id: number;
  codigo: number;
  nombre: string;
  precio: number;
  stock: number;

}

const ITEMS_KEY = 'my-products';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private _storage: Storage;
  constructor(private storage: Storage) {
     this.init();
   }

   async init(){
     const storage = await this.storage.create();
     this._storage=storage;
   }
   //AGREGAR OBJETO A STORAGE
   addProducto(producto: Productos):Promise<any>{
     return this.storage.get(ITEMS_KEY).then((productos:Productos[])=>{
       if(productos){
         productos.push(producto);
         return this.storage.set(ITEMS_KEY,productos);
       }else{
         return this.storage.set(ITEMS_KEY,[producto]);
       }
     })
   }

   getProductos(): Promise<Productos[]>{
     return this.storage.get(ITEMS_KEY);
   }
}
