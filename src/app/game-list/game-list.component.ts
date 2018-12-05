import { GameService } from './../game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Array<any>;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames(){
    this.gameService.getGames().subscribe(data => this.games = data.slice(0,3));
  }
}
