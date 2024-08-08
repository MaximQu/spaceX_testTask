import { Dragon } from "@/types/Dragons";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  dragonsByIdTransformResponse,
  dragonsTransformResponse,
} from "./utils/dragonsTransformResponse";
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
      transformResponse: dragonsTransformResponse,
      async onQueryStarted(_, { queryFulfilled }) {
        const { data } = await queryFulfilled;
        setDragonsCache(data);
      },
    }),
    getDragonById: builder.query<Dragon, string>({
      query: (id) => `/${id}`,
      transformResponse: dragonsByIdTransformResponse,
      async onQueryStarted(dragonId, { queryFulfilled }) {
        const { data } = await queryFulfilled;
        setDragonsByIdCache(dragonId, data);
      },
    }),
  }),
});

export const { useGetDragonsQuery, useGetDragonByIdQuery } = dragonsApi;
