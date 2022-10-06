import Energy from '../Energy';

export default interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;

  attack(enemy: Fighter): void

  special(enemy: Fighter): void

  receiveDamage(amount: number): void

  levelUp () : void

}