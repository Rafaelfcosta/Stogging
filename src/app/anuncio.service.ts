import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  anunciosUrl = 'http://localhost:8080/Stogging-BackEnd/api/anuncio/';

  constructor(private http: HttpClient) { }

  getAnuncios(){
    return this.http.get<any[]>(`${this.anunciosUrl}`);
  }

  getAnunciosByGameId(id){
    let url = this.anunciosUrl + "findByGameId/" +id;
    return this.http.get<any[]>(url);
  }
}
