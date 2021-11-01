import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente[] = [
    {
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio'
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
    },
    {
      icon:'log-out-outline',
      name: 'Cerrar sesión',
      redirecTo:'/login'
    }
  ]
}
