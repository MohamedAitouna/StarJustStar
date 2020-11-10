import Phaser from 'phaser';

export class SnakeState extends Phaser.Scene {
  snakeHead: Phaser.GameObjects.Image;
  borderDown: Phaser.GameObjects.Image;
  borderUp: Phaser.GameObjects.Image;
  start = false;
  directionY = 1;
  constructor() {
    super({ key: 'snake' });
  }
  preload() {
  }
  create() {

    // Set Border
    this.borderUp = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 4, 'border');
    this.borderUp.setOrigin(0.5, 0);
    this.borderDown = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'border');
    this.borderDown.setOrigin(0.5, 0);
    const positionX = this.borderUp.x;
    const positionY = this.borderUp.y;
    const height = this.borderUp.height;
    this.snakeHead = this.add.image(positionX, positionY + height, 'snakeHead').setOrigin(0.5, 0);

    const keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    keyDown.on('down', () => {
      this.start = true;
    });

  }
  update(time: number, delta: number) {
    if (this.start) {
      if (this.directionY === 1) {
        const nextYPosition = this.snakeHead.y + 1;
        if (nextYPosition < this.borderDown.y - this.borderDown.height) {
          this.snakeHead.setY(nextYPosition);
        } else {
          this.directionY = -1;
        }
      } else if (this.directionY === -1) {
        const nextYPosition = this.snakeHead.y - 1;
        if (nextYPosition > this.borderUp.y + this.borderDown.height) {
          this.snakeHead.setY(nextYPosition);
        } else {
          this.directionY = 1;
        }
      }

    }

  }
}
