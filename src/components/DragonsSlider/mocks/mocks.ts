import { Dragon } from "@/types/Dragons";

const partialDragon = {
  height: { meters: 0, feet: 0 },
  diameter: { meters: 0, feet: 0 },
  trunkVolume: { cubic_meters: 0, cubic_feet: 0 },
  launchPayloadMass: { kg: 0, lb: 0 },
  returnPayloadMass: { kg: 0, lb: 0 },
} as Partial<Dragon>;

export const dragonMocks = [
  {
    id: "placeholder1",
    name: "Placeholder-1",
    imgUrl: "https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg",
    ...partialDragon,
  } as Dragon,
  {
    id: "placeholder2",
    name: "Placeholder-2",
    imgUrl: "https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg",
    ...partialDragon,
  } as Dragon,
  {
    id: "placeholder3",
    name: "Placeholder-3",
    imgUrl: "https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg",
    ...partialDragon,
  } as Dragon,
];
