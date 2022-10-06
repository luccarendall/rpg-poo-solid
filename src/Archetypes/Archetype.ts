import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name : string;
  private _special: number;
  private _cost: number;

  constructor(name: string, special: number, cost: number) {
    this._name = name;
    this._special = special;
    this._cost = cost;
  }

  get name() {
    return this._name;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }

  // método estático chamado createdArchetypeInstances que retorna um number
  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  // getter abstrato chamado energyType
  abstract get energyType(): EnergyType; 
}

export default Archetype;
