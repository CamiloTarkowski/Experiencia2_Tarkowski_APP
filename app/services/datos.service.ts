import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';

export interface Datos{
  id: number;
  nombre;
  
}

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(
    private storage:Storage
  ) { }
}
