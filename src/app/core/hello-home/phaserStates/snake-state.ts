import Phaser from 'phaser';

export class SnakeState extends Phaser.Scene {

  snakeFood: Phaser.GameObjects.Image;
  snakeHead: Phaser.GameObjects.Image;
  snakeBody = [];
  borderDown: Phaser.GameObjects.Image;
  borderUp: Phaser.GameObjects.Image;

  leftBorderPositionX: number;
  rightBorderPositionX: number;
  upBorderPositionY: number;
  bottomBorderPositionY: number;
  keyCode: string;
  currentKeyCode: string;
  speed = 10;
  speedMove = 100;
  moveTime = 0;

  aFlag = true;

  constructor() {
    super({ key: 'snake' });
  }
  preload() {
  }
  create() {

    const camerasWidth = this.cameras.main.width;
    const camerasHeight = this.cameras.main.height;


    // Set SnakeHead
    this.snakeHead = this.add.image(this.posCorrection(camerasWidth / 2) + 5, this.posCorrection(camerasHeight / 3) + 5, 'snakeHead')
      .setOrigin(0.5, 0.5);


    // Set Borders
    this.borderUp = this.add.image(this.posCorrection(camerasWidth / 2), this.posCorrection(camerasHeight / 4), 'border')
      .setOrigin(0.5, 1);
    this.borderDown = this.add.image(this.posCorrection(camerasWidth / 2), this.posCorrection(camerasHeight / 2), 'border')
      .setOrigin(0.5, 0);

    this.leftBorderPositionX = this.borderUp.x - (this.borderUp.width / 2);
    this.rightBorderPositionX = this.borderUp.x + (this.borderUp.width / 2);

    this.upBorderPositionY = this.borderUp.y;
    this.bottomBorderPositionY = this.borderDown.y;

    const foodPosition = this.generateFoodPosition();
    this.snakeFood = this.add.image(this.posCorrection(foodPosition[0]) + 5, this.posCorrection(foodPosition[1]) + 5, 'snakeFood')
      .setOrigin(0.5, 0.5);


    // const keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    // keyDown.on('down', () => {
    //   this.start = true;
    // });

    this.input.keyboard.on('keydown', (event) => {
      this.keyCode = event.code;
    });

  }
  update(time: number, delta: number) {


    if (time > this.moveTime) {

      if (this.keyCode === 'ArrowDown' || this.keyCode === 'ArrowUp') {
        if (this.currentKeyCode !== 'ArrowDown' && this.currentKeyCode !== 'ArrowUp') {
          this.currentKeyCode = this.keyCode;
        }
      } else if (this.keyCode === 'ArrowLeft' || this.keyCode === 'ArrowRight') {
        if (this.currentKeyCode !== 'ArrowLeft' && this.currentKeyCode !== 'ArrowRight') {
          this.currentKeyCode = this.keyCode;
        }
      }

      this.aFlag = true;
      let currentXpostion = this.snakeHead.x;
      let currentYpostion = this.snakeHead.y;


      // Phaser.Math.Wrap
      if (this.currentKeyCode === 'ArrowDown') {

        this.snakeHead.y = Phaser.Math.Wrap(this.snakeHead.y + this.speed,
          this.upBorderPositionY, this.bottomBorderPositionY);
      } else if (this.currentKeyCode === 'ArrowUp') {

        this.snakeHead.y = Phaser.Math.Wrap(this.snakeHead.y - this.speed,
          this.upBorderPositionY, this.bottomBorderPositionY);
      } else if (this.currentKeyCode === 'ArrowLeft') {
        this.snakeHead.x = Phaser.Math.Wrap(this.snakeHead.x - this.speed,
          this.leftBorderPositionX, this.rightBorderPositionX);
      } else if (this.currentKeyCode === 'ArrowRight') {
        this.snakeHead.x = Phaser.Math.Wrap(this.snakeHead.x + this.speed,
          this.leftBorderPositionX, this.rightBorderPositionX);
      } else {

      }

      // if (this.snakeBody.length) {
      //   Phaser.Actions.ShiftPosition(this.snakeBody, currentXpostion, currentYpostion);
      // }


      this.snakeBody.forEach(body => {
        const bodyX = body.x;
        const bodyY = body.y;

        if (this.snakeHead.x === bodyX && this.snakeHead.y === bodyY) {
          this.scene.pause();
        }
        body.x = currentXpostion;
        body.y = currentYpostion;

        currentXpostion = bodyX;
        currentYpostion = bodyY;
      });

      if (this.snakeFood.x === this.snakeHead.x &&
        this.snakeFood.y === this.snakeHead.y) {

        const foodPosition = this.generateFoodPosition();
        this.snakeFood.setPosition(this.posCorrection(foodPosition[0], 5),
          this.posCorrection(foodPosition[1], 5));

        const snakeBody = this.add.image(currentXpostion, currentYpostion, 'snakeBody')
          .setOrigin(0.5, 0.5);

        this.snakeBody.push(snakeBody);
      }
      this.moveTime = time + this.speedMove;
    }

    if (this.aFlag) {
      this.aFlag = false;
      setTimeout(() => {


      }, 100);
    }


    // this.keyCode = '';
  }


  generateFoodPosition() {
    const x = Math.floor(Math.random() * (this.rightBorderPositionX - this.leftBorderPositionX - 9) + this.leftBorderPositionX + 5);
    const y = Math.floor(Math.random() * (this.bottomBorderPositionY - this.upBorderPositionY - 9) + this.upBorderPositionY + 5);
    return [x, y];
  }

  posCorrection(value: number, coff = 10): number {
    const result = (value + (coff - (value % coff)));
    if (coff === 5) {
      if (value % 10 === 0) {
        return (value - 5);
      } else if (value % 5 === 0) {
        return value;
      } else if (result % 10 === 0) {
        return (result - 5);
      }
    }
    return result;
  }
}
