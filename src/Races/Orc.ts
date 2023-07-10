import Race from './Race';

class Orc extends Race {
  static instances = 0;
  maxLifePoints: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc.instancesPlus();
  }

  static instancesPlus(): void {
    Orc.instances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.instances;
  }
}

export default Orc;