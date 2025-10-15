import { configureStore } from "@reduxjs/toolkit";
import authRecuder from "./slices/authSlice";
import countRecuder from "./slices/countSlice";
import { trackApi } from "./services/trackApi";
import { GenreApi } from "./services/GenreApi/GenreApi";

export const store = configureStore({
    reducer: {
        'auth': authRecuder,
        'count': countRecuder,
        [trackApi.reducerPath]: trackApi.reducer,
        [GenreApi.reducerPath]: GenreApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(trackApi.middleware,GenreApi.middleware),
        
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch