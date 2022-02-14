export type PlanetType = 'earth' | 'moon' | 'mars' | 'jupiter' | 'neptune' | 'pluto' | 'venus' | 'mercury' | 'sun';

export type PlanetObject = {
  objectValue: PlanetType;
  objectName: string;
  objectPrefix: string;
  objectFactor: number;
};

export const PLANETS: Array<PlanetObject> = [
  {
    objectValue: 'earth',
    objectName: 'object-earth',
    objectPrefix: 'object-prefix1',
    objectFactor: 1,
  },
  {
    objectValue: 'moon',
    objectName: 'object-moon',
    objectPrefix: 'object-prefix2',
    objectFactor: 0.165392066891,
  },
  {
    objectValue: 'mars',
    objectName: 'object-mars',
    objectPrefix: 'object-prefix1',
    objectFactor: 0.37840318140104,
  },
  {
    objectValue: 'jupiter',
    objectName: 'object-jupiter',
    objectPrefix: 'object-prefix1',
    objectFactor: 2.5277862751096,
  },
  {
    objectValue: 'neptune',
    objectName: 'object-neptune',
    objectPrefix: 'object-prefix1',
    objectFactor: 1.136942999898,
  },
  {
    objectValue: 'pluto',
    objectName: 'object-pluto',
    objectPrefix: 'object-prefix4',
    objectFactor: 0.063220148873254,
  },
  {
    objectValue: 'venus',
    objectName: 'object-venus',
    objectPrefix: 'object-prefix1',
    objectFactor: 0.90445600081574,
  },
  {
    objectValue: 'mercury',
    objectName: 'object-mercury',
    objectPrefix: 'object-prefix1',
    objectFactor: 0.37728153359845,
  },
  {
    objectValue: 'sun',
    objectName: 'object-sun',
    objectPrefix: 'object-prefix3',
    objectFactor: 1,
  },
];
