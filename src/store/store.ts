import { crewApi } from "@/api/crewApi";
import { dragonsApi } from "@/api/dragonsApi";
import { configureStore, isRejected, Middleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

interface RejectedActionPayload {
  originalStatus?: number;
}

export const rtkQueryErrorLogger: Middleware =
  () => (next) => (action: unknown) => {
    if (isRejected(action)) {
      const payload = action.payload as RejectedActionPayload;
      if (payload.originalStatus === 404) {
        window.location.pathname = "/not_found";
      }
    }
    return next(action);
  };

export const store = configureStore({
  reducer: {
    [dragonsApi.reducerPath]: dragonsApi.reducer,
    [crewApi.reducerPath]: crewApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(dragonsApi.middleware)
      .concat(crewApi.middleware)
      .concat(rtkQueryErrorLogger),
});

setupListeners(store.dispatch);
