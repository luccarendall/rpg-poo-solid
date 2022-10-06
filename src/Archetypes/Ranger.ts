import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static createdArchetypeInstancesCounter = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.createdArchetypeInstancesCounter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger.createdArchetypeInstancesCounter;
  }
}

export default Ranger;