import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  private _fighter: Fighter;
  private _monsters: SimpleFighter[];

  constructor(fighter: Fighter, monsters: SimpleFighter[]) {
    super(fighter);
    this._fighter = fighter;
    this._monsters = monsters;
  }

  get fighter(): Fighter {
    return this._fighter;
  }

  get monsters(): SimpleFighter[] {
    return this._monsters;
  }

  fight(): number {
    this._monsters.map((opponent) => {
      if (this.fighter.lifePoints >= opponent.lifePoints) {
        this.fighter.attack(opponent);
      }
      opponent.attack(this.fighter);
      return super.fight();
    });
    return super.fight();
  }
}

export default PVE;