import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FireserviceService } from 'src/app/fireservice.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = {
    nombre : '',
    apellidos : '',
    fono : '',
    email : '',
    password:'',
  }

  constructor(
    private menuController: MenuController,
    public fireService: FireserviceService
    ) { }


  ngOnInit() {
  }

  signup(){
    this.fireService.signup({email:this.usuario.email,password:this.usuario.password}).then(res=>{
      if(res.user.uid){
        let data = {
          email:this.usuario.email,
          password:this.usuario.password,
          nombre:this.usuario.nombre,
          apellidos:this.usuario.apellidos,
          fono:this.usuario.fono,
          uid:res.user.uid

        }
        this.fireService.saveDetails(data).then(res=>{
          alert('¡Registro exitoso!');
        },err=>{
          console.log(err);
        })

      }
    },err=>{
      alert(err.message);
      console.log(err);
    })
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

  mostrarMenu(){
    this.menuController.open('first');  }

}
