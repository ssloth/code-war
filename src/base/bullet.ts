import { Scene } from 'phaser';
import { Concealment } from './interfaces/base';
import { IBulletModel, IBullet, IBulletState } from './interfaces/bullet';
import { ICartesianCoordinate } from './interfaces/information';

export class Bullet implements IBullet {
  sprite: Phaser.Physics.Arcade.Sprite;
  destroy: boolean;
  constructor(
    context: { scene: Scene; sprite: string },
    public model: IBulletModel,
    public state: IBulletState,
  ) {
    this.sprite = context.scene.physics.add.sprite(0, 0, context.sprite)
    context.scene.physics.add.existing(this.sprite);
    this.destroy = false;
  }

  setPosition(x: number, y: number) {
    if (!this.sprite.body) return;
    this.sprite.body.position.x = x;
    this.sprite.body.position.y = y;
    this.state.position = { x, y };
  }

  hit() {
    this.destroy = false;
    this.sprite.destroy();
  }
}

export class BulletModel implements IBulletModel {
  ATTACK_POWER!: number;
  CONCEALMENT!: Concealment;
  SIZE!: { WIDTH: number; HEIGHT: number };
  SPEED!: number;

  constructor(data: IBulletModel) {
    Object.entries(data).forEach(([k, v]) => (this[k] = v));
  }

  move(position: ICartesianCoordinate): this {
    return this;
  }
}
