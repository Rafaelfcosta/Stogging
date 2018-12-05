import { GameService } from './../game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  games: Array<any>;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames(){
    this.gameService.getGames().subscribe(data => this.games = data);
  }
}
