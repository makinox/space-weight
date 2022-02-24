export type PlanetType = 'earth' | 'moon' | 'mars' | 'jupiter' | 'neptune' | 'pluto' | 'venus' | 'mercury' | 'sun';

export type PlanetObject = {
  objectValue: PlanetType;
  objectValueEs: string;
  objectName: string;
  objectPrefix: string;
  objectFactor: number;
};

export const PLANETS: Array<PlanetObject> = [
  {
    objectValue: 'earth',
    objectValueEs: 'tierra',
    objectName: 'system-earth',
    objectPrefix: 'object-prefix1',
    objectFactor: 1,
  },
  {
    objectValue: 'moon',
    objectValueEs: 'luna',
    objectName: 'system-moon',
    objectPrefix: 'object-prefix2',
    objectFactor: 0.165392066891,
  },
  {
    objectValue: 'mars',
    objectValueEs: 'marte',
    objectName: 'system-mars',
    objectPrefix: 'object-prefix1',
    objectFactor: 0.37840318140104,
  },
  {
    objectValue: 'jupiter',
    objectValueEs: 'jupiter',
    objectName: 'system-jupiter',
    objectPrefix: 'object-prefix1',
    objectFactor: 2.5277862751096,
  },
  {
    objectValue: 'neptune',
    objectValueEs: 'neptuno',
    objectName: 'system-neptune',
    objectPrefix: 'object-prefix1',
    objectFactor: 1.136942999898,
  },
  {
    objectValue: 'pluto',
    objectValueEs: 'pluto',
    objectName: 'system-pluto',
    objectPrefix: 'object-prefix4',
    objectFactor: 0.063220148873254,
  },
  {
    objectValue: 'venus',
    objectValueEs: 'venus',
    objectName: 'system-venus',
    objectPrefix: 'object-prefix1',
    objectFactor: 0.90445600081574,
  },
  {
    objectValue: 'mercury',
    objectValueEs: 'mercurio',
    objectName: 'system-mercury',
    objectPrefix: 'object-prefix1',
    objectFactor: 0.37728153359845,
  },
  {
    objectValue: 'sun',
    objectValueEs: 'sol',
    objectName: 'system-sun',
    objectPrefix: 'object-prefix3',
    objectFactor: 1,
  },
];
