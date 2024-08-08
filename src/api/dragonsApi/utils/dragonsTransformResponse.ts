import { Dragon } from "@/types/Dragons";
import { DragonResponseSchema } from "@/types/DragonsResponse";

export const dragonsTransformResponse = (
  dragonsResponse: DragonResponseSchema[],
) =>
  dragonsResponse.map(
    ({ trunk: { trunk_volume } = {}, ...dragon }) =>
      ({
        ...dragon,
        imgUrl: dragon.flickr_images?.[0],
        launchPayloadMass: dragon.launch_payload_mass,
        returnPayloadMass: dragon.return_payload_mass,
        trunkVolume: trunk_volume,
        height: dragon.height_w_trunk,
      }) as Partial<Dragon>,
  );

export const dragonsByIdTransformResponse = (dragon: DragonResponseSchema) =>
  ({
    ...dragon,
    imgUrl: dragon.flickr_images?.[0],
    launchPayloadMass: dragon.launch_payload_mass,
    returnPayloadMass: dragon.return_payload_mass,
    trunkVolume: dragon.trunk.trunk_volume,
    height: dragon.height_w_trunk,
    crewCapacity: dragon.crew_capacity,
  }) as Dragon;
