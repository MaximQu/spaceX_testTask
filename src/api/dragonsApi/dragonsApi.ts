import { Dragon } from "@/types/Dragons";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DragonResponseSchema } from "../../types/DragonsResponse";
import {
  setDragonsByIdCache,
  setDragonsCache,
} from "./utils/localStorageUtils";

export const dragonsApi = createApi({
  reducerPath: "dragonsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.spacexdata.com/v4/dragons`,
  }),
  endpoints: (builder) => ({
    getDragons: builder.query<Partial<Dragon>[], void>({
      query: () => "/",
      transformResponse: (dragonsResponse: DragonResponseSchema[]) =>
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
        ),
      async onQueryStarted(_, { queryFulfilled }) {
        const { data } = await queryFulfilled;
        setDragonsCache(data);
      },
    }),
    getDragonById: builder.query<Dragon, string>({
      query: (id) => `/${id}`,
      transformResponse: (dragon: DragonResponseSchema) =>
        ({
          ...dragon,
          imgUrl: dragon.flickr_images?.[0],
          launchPayloadMass: dragon.launch_payload_mass,
          returnPayloadMass: dragon.return_payload_mass,
          trunkVolume: dragon.trunk.trunk_volume,
          height: dragon.height_w_trunk,
          crewCapacity: dragon.crew_capacity,
        }) as Dragon,
      async onQueryStarted(dragonId, { queryFulfilled }) {
        const { data } = await queryFulfilled;
        setDragonsByIdCache(dragonId, data);
      },
    }),
  }),
});

export const { useGetDragonsQuery, useGetDragonByIdQuery } = dragonsApi;
