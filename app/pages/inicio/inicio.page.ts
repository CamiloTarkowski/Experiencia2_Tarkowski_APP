import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes : Componente[] = [
    {
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio'
    },
    
    {
      icon: 'person-add-outline',
      name: 'Registro',
      redirecTo: '/registro'
    },
    {
      icon:'bag-handle-outline',
      name: 'Ver ofertas',
      redirecTo:'/ofertas'
    },
    {
      icon:'notifications-outline',
      name: 'Notificaciones',
      redirecTo:'/inicio'
    },
    {
      icon:'heart-outline',
      name: 'Favoritos',    
      redirecTo:'/inicio'
    },
    {
      icon:'bag-check-outline',
      name: 'Mis compras',
      redirecTo:'/inicio'
    }



  ];

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');  }

}
