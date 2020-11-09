import Phaser from 'phaser';

export class MainState extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {
    // this.load.spritesheet('loadSpinner', '../../../../assets/img/HelloPage/loading.png',
    //   { frameWidth: 320, frameHeight: 303 });
  }
  create() {
    this.scene.start('menu');
  }
}
