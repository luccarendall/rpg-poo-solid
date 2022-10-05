import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static createdRacesInstancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;

    Elf.createdRacesInstancesCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.createdRacesInstancesCounter;
  }
}

export default Elf;