import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static createdArchetypeInstancesCounter = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.createdArchetypeInstancesCounter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.createdArchetypeInstancesCounter;
  }
}

export default Necromancer;