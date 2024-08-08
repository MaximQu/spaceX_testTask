import { Dragon } from "@/types/Dragons";

const DRAGONS_DATA_LOCAL_STORAGE_KEY = "DRAGONS_DATA_CACHE";

export const getDragonsCache = (): Dragon[] => {
  return Object.values(
    JSON.parse(
      localStorage.getItem(DRAGONS_DATA_LOCAL_STORAGE_KEY) ||
        JSON.stringify({}),
    ),
  );
};

export const setDragonsCache = (data: Partial<Dragon>[]) => {
  localStorage.setItem(
    DRAGONS_DATA_LOCAL_STORAGE_KEY,
    JSON.stringify(
      data.reduce(
        (acc, curr) =>
          curr.id != null ? Object.assign(acc, { [curr.id]: curr }) : acc,
        {},
      ),
    ),
  );
};

export const getDragonsByIdCache = (id: string) => {
  return JSON.parse(
    localStorage.getItem(DRAGONS_DATA_LOCAL_STORAGE_KEY) || JSON.stringify({}),
  )[id];
};

export const setDragonsByIdCache = (dragonId: string, data: Dragon) => {
  const cache = JSON.parse(
    localStorage.getItem(DRAGONS_DATA_LOCAL_STORAGE_KEY) || JSON.stringify({}),
  );
  localStorage.setItem(
    DRAGONS_DATA_LOCAL_STORAGE_KEY,
    JSON.stringify(Object.assign(cache, { [dragonId]: data })),
  );
};
