import { AnuncioService } from './../anuncio.service';
import { GameService } from './../game.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  game;
  anuncios: Array<any>

  constructor(private route: ActivatedRoute, private gameService: GameService, 
    private anuncioService:AnuncioService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getGames(params.id);
      this.getAnuciosFromGame(params.id);
    })
  }

  getGames(id){
    this.gameService.getGameById(id).subscribe(data => this.game = data);
  }

  getAnuciosFromGame(id){
    this.anuncioService.getAnunciosByGameId(id).subscribe(data => this.anuncios = data);
  }
}
