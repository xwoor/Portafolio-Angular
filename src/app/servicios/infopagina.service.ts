import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interface/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

info: InfoPagina = {};



  constructor(private http: HttpClient ){

    // console.log("ppag");
    // Leer archivo Json
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp:InfoPagina) =>{

      this.info = resp;
      console.log(resp);
    });
  }
}
