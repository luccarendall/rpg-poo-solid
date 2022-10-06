import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  private _fighter1: Fighter;
  private _fighter2: Fighter;

  constructor(fighter1: Fighter, fighter2: Fighter) {
    super(fighter1);
    this._fighter1 = fighter1;
    this._fighter2 = fighter2;
  }

  get fighter1(): Fighter {
    return this._fighter1;
  }

  get fighter2(): Fighter {
    return this._fighter2;
  }

  fight(): number {
    if (this.fighter1.strength > this.fighter2.defense 
      || this.fighter2.strength > this.fighter1.defense) {
      this.fighter1.attack(this.fighter2);
    } else return 0;
    
    if (this.fighter1.lifePoints > -1 && this.fighter2.lifePoints > -1) {
      this.fighter2.attack(this.fighter1);
      return this.fight();
    }
    return super.fight();
  }
}

export default PVP;