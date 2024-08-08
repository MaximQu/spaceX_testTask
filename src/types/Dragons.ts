type Dimensions = {
  meters?: number;
  feet?: number;
};

type Volume = {
  cubic_meters?: number;
  cubic_feet?: number;
};

type Mass = {
  kg?: number;
  lb?: number;
};

export type Dragon = {
  id: string;
  name: string;
  imgUrl: string;
  height: Dimensions;
  diameter: Dimensions;
  trunkVolume: Volume;
  launchPayloadMass: Mass;
  returnPayloadMass: Mass;
  active: boolean;
  type: string;
  crewCapacity: number;
};
