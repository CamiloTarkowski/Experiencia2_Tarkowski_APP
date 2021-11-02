import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductoService , Productos } from 'src/app/services/producto.service';
import { Platform, ToastController, IonList } from '@ionic/angular';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  productos: Productos[] = [];
  newProducto: Productos = <Productos>{};
  @ViewChild('MyList')myList: IonList;



  constructor(private storageService: ProductoService,
    private plt: Platform, private toastController: ToastController) {
      this.plt.ready().then(()=> {
        this.loadProductos();
      });
     }

  ngOnInit() {
  }
  //GET PRODUCTO
  loadProductos(){
    this.storageService.getProductos().then(productos=>{
      this.productos=productos;
    });
  }

  //CREATE PRODUCTO
  addProducto(){
    this.newProducto.id = Date.now();
    this.storageService.addProducto(this.newProducto).then(producto=> {
      this.newProducto= <Productos>{};
      this.showToast('Producto agregado correctamente.');
      this.loadProductos();
    });
  }
  async showToast(msg){
    const toast = await this.toastController.create({
      message:msg,
      duration: 2000
    });
    toast.present();
  }


}
