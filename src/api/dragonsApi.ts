import { Dragon } from "@/types/Dragons";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DragonResponseSchema } from "../types/DragonsResponse";

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
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(
          dragonsApi.util.upsertQueryData(
            "getDragons",
            undefined,
            Object.values(
              JSON.parse(
                localStorage.getItem("DRAGONS_DATA_CACHE") ||
                  JSON.stringify({}),
              ),
            ),
          ),
        );
        const { data } = await queryFulfilled;
        localStorage.setItem(
          "DRAGONS_DATA_CACHE",
          JSON.stringify(
            data.reduce(
              (acc, curr) =>
                curr.id != null ? Object.assign(acc, { [curr.id]: curr }) : acc,
              {},
            ),
          ),
        );
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
      async onQueryStarted(dragonId, { dispatch, queryFulfilled }) {
        dispatch(
          dragonsApi.util.upsertQueryData(
            "getDragonById",
            dragonId,
            JSON.parse(
              localStorage.getItem("DRAGONS_DATA_CACHE") || JSON.stringify({}),
            )[dragonId],
          ),
        );
        const { data } = await queryFulfilled;
        const cache = JSON.parse(
          localStorage.getItem("DRAGONS_DATA_CACHE") || JSON.stringify({}),
        );
        localStorage.setItem(
          "DRAGONS_DATA_CACHE",
          JSON.stringify(Object.assign(cache, { [dragonId]: data })),
        );
      },
    }),
  }),
});

export const { useGetDragonsQuery, useGetDragonByIdQuery } = dragonsApi;
