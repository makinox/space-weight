export type PlanetType = 'earth' | 'moon' | 'mars' | 'jupiter' | 'neptune' | 'pluto' | 'venus' | 'mercury' | 'sun';

export type PlanetObject = {
  objectValue: PlanetType;
  objectName: string;
  objectPrefix: string;
};

export const PLANETS: Array<PlanetObject> = [
  {
    objectValue: 'earth',
    objectName: 'object-earth',
    objectPrefix: 'object-prefix1',
  },
  {
    objectValue: 'moon',
    objectName: 'object-moon',
    objectPrefix: 'object-prefix2',
  },
  {
    objectValue: 'mars',
    objectName: 'object-mars',
    objectPrefix: 'object-prefix1',
  },
  {
    objectValue: 'jupiter',
    objectName: 'object-jupiter',
    objectPrefix: 'object-prefix1',
  },
  {
    objectValue: 'neptune',
    objectName: 'object-neptune',
    objectPrefix: 'object-prefix1',
  },
  {
    objectValue: 'pluto',
    objectName: 'object-pluto',
    objectPrefix: 'object-prefix4',
  },
  {
    objectValue: 'venus',
    objectName: 'object-venus',
    objectPrefix: 'object-prefix1',
  },
  {
    objectValue: 'mercury',
    objectName: 'object-mercury',
    objectPrefix: 'object-prefix1',
  },
  {
    objectValue: 'sun',
    objectName: 'object-sun',
    objectPrefix: 'object-prefix3',
  },
];
