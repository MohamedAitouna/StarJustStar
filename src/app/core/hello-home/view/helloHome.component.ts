import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { MainState } from '../phaserStates/main-state';
import { MenuState } from '../phaserStates/menu-state';
import { SnakeState } from '../phaserStates/snake-state';
@Component({
  selector: 'sjs-hello-home',
  templateUrl: './HelloHome.component.html',
  styleUrls: ['helloHome.component.css']
})
export class HelloHomeComponent implements OnInit {

  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  constructor() {
    this.config = {
      type: Phaser.AUTO,
      width: 800,
      scene: [MainState, MenuState, SnakeState],
      parent: 'game',
      backgroundColor: 0xffffff,
      scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 100 }
        }
      }
    };
  }
  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);
  }

}

