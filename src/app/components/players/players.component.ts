import { Component, OnInit } from '@angular/core';
 import {PlayerService} from '../../services/player/player.service';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players= [];

  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
    this._playerService.getPlayers().subscribe(resPlayerData => this.players = resPlayerData);
    console.log(this.players);
    
  }

}
