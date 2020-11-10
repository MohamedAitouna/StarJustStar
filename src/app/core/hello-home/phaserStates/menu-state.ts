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
      console.log('progress');
      // loadFrame = (loadFrame + 1) % 3;
      // loadSpinner.setFrame(loadFrame);
    });
    this.load.on('fileprogress', file => {
      // TO USE IT AFTER
    });
    this.load.on('complete', () => {
      // loadSpinner.destroy();
      console.log('complete');
    });

    this.load.image('Mister0', '../../../../assets/img/HelloPage/Mister0.png');
    this.load.image('snakeHead', '../../../../assets/img/HelloPage/snake/snakeHead.bmp');
    this.load.image('snakeBody', '../../../../assets/img/HelloPage/snake/snakeBody.bmp');
    this.load.image('snakeFood', '../../../../assets/img/HelloPage/snake/snakeFood.bmp');
    this.load.image('border', '../../../../assets/img/HelloPage/snake/border.bmp');


  }
  create() {
    console.log('create');
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
