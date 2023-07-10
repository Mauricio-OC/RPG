import Race from './Race';

class Halfling extends Race {
  static instances = 0;
  maxLifePoints: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling.instancesPlus();
  }

  static instancesPlus(): void {
    Halfling.instances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instances;
  }
}

export default Halfling;