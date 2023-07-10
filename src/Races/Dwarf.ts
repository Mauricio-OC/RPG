import Race from './Race';

class Dwarf extends Race {
  static instances = 0;
  maxLifePoints: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.instancesPlus();
  }

  static instancesPlus(): void {
    Dwarf.instances += 1;
  }

  static get createdRacesInstances(): number {
    return Dwarf.instances;
  }
}

export default Dwarf;