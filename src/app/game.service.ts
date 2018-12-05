import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gamesUrl = 'http://localhost:8080/Stogging-BackEnd/api/jogo';

  constructor(private http: HttpClient) { }

  getGames(){
    return this.http.get<any[]>(`${this.gamesUrl}`);
  }

  getGameById(id){
    let url = this.gamesUrl + "/" +id;
    return this.http.get(url);
  }

}
