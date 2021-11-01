import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Producto{
  name: string;
  precio: string;
  imagen: string;
}

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  productos : Producto[] = [
    {
      name: 'Chaqueta',
      precio: '$29.990',
      imagen: 'assets/p1.jfif'
    },
    
    {
      name: 'Jeans',
      precio: '$39.990',
      imagen: 'assets/p2.jfif'
    },
    {
      name: 'Jeans M',
      precio: '$15.990',
      imagen: 'assets/p3.jfif'
    },
    {
      name: 'Abrigo',
      precio: '$19.990',
      imagen: 'assets/p4.jfif'
    },
    {
      name: 'Camisa',
      precio: '$24.990',
      imagen: 'assets/p5.jfif'
    },
    {
      name: 'Blusa',
      precio: '$15.990',
      imagen: 'assets/p6.jfif'
    },
    {
      name: 'Falda negra',
      precio: '$19.990',
      imagen: 'assets/p7.jfif'
    },
    {
      name: 'Falda mujer',
      precio: '$24.990',
      imagen: 'assets/p8.jfif'
    },
    {
      name: 'Falda verde',
      precio: '$15.990',
      imagen: 'assets/p9.jfif'
    },



  ];

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');  }

}
