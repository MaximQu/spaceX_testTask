type HeatShield = {
  material: string;
  size_meters: number;
  temp_degrees?: number;
  dev_partner?: string;
};

type PayloadMass = {
  kg?: number;
  lb?: number;
};

type PayloadVol = {
  cubic_meters?: number;
  cubic_feet?: number;
};

type PressurizedCapsule = {
  payload_volume: PayloadVol;
};

type TrunkVolume = {
  cubic_meters?: number;
  cubic_feet?: number;
};

type Cargo = {
  solar_array?: number;
  unpressurized_cargo?: boolean;
};

type Trunk = {
  trunk_volume: TrunkVolume;
  cargo: Cargo;
};

type Dimensions = {
  meters?: number;
  feet?: number;
};

export type DragonResponseSchema = {
  id: string;
  name: string;
  type: string;
  active: boolean;
  crew_capacity: number;
  sidewall_angle_deg: number;
  orbit_duration_yr: number;
  dry_mass_kg: number;
  dry_mass_lb: number;
  first_flight?: string;
  heat_shield: HeatShield;
  thrusters: any[];
  launch_payload_mass: PayloadMass;
  launch_payload_vol: PayloadVol;
  return_payload_mass: PayloadMass;
  return_payload_vol: PayloadVol;
  pressurized_capsule: PressurizedCapsule;
  trunk: Trunk;
  height_w_trunk: Dimensions;
  diameter: Dimensions;
  flickr_images: string[];
  wikipedia?: string;
  description?: string;
};
