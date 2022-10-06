import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {
  // lifePoints: number;
  // strength: number;
  defense: number;
  energy?: Energy;

  // attack(enemy: Fighter): void

  special(enemy: Fighter): void

  // receiveDamage(amount: number): void

  levelUp () : void

}