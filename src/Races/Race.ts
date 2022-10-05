abstract class Race {
  private _name: string;
  private _dexterity: number; // destreza

  // recebendo atributos como parâmetros e inicializando no construtor
  constructor(name: string, dexterity: number) { 
    this._name = name;
    this._dexterity = dexterity;
  }

  // atributos da classe Race podem ser LIDOS, mas NÃO podem ser alterados
  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  // Deve ter um método estático chamado createdRacesInstances, que retorna um number
  static createdRacesInstances(): number {
    // Na classe Race, o método deve lançar um erro com a mensagem Not implemented
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number; 
}

export default Race;