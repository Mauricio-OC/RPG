import Race from './Race';

class Elf extends Race {
  static instances = 0;
  maxLifePoints: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.instancesPlus();
  }

  static instancesPlus(): void {
    Elf.instances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instances;
  }
}

export default Elf;