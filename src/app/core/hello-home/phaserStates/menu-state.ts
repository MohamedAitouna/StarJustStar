import Phaser from 'phaser';

export class MenuState extends Phaser.Scene {
  constructor() {
    super({ key: 'menu' });
  }
  preload() {

    // let loadFrame = 0;
    // const loadSpinner = this.add.sprite(0, 0, 'loadSpinner', loadFrame);
    // loadSpinner.setOrigin(0, 0);
    this.load.on('progress', value => {
      // loadFrame = (loadFrame + 1) % 3;
      // loadSpinner.setFrame(loadFrame);
    });
    this.load.on('fileprogress', file => {
      // TO USE IT AFTER
    });
    this.load.on('complete', () => {
      // loadSpinner.destroy();
    });

    this.load.image('Mister0', '../../../../assets/img/HelloPage/Mister0.png');

  }
  create() {
    const mister0 = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'Mister0')
      .setInteractive();
    mister0.setOrigin(0.5, 0.5);
    mister0.on('pointerup', () => {
      this.scene.start('snake');
    });
  }


  update() {

  }
}
