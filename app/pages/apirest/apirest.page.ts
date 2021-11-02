import { Component, OnInit } from '@angular/core';
import { ApirestService } from 'src/app/services/apirest.service';
import { Article } from 'src/app/interfaces/interfaces';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-apirest',
  templateUrl: './apirest.page.html',
  styleUrls: ['./apirest.page.scss'],
})
export class ApirestPage implements OnInit {

  noticias: Article[] = []

  constructor(private apirestService: ApirestService, private menuController: MenuController) { }

  ngOnInit() {
    this.apirestService.getTopHeadLines().subscribe(resp=>{
      console.log('noticias',resp);
      this.noticias.push(...resp.articles); 
    });
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  

}
