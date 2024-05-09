import QuerySlice from '@/entities/query/model/QuerySlice';
import TabSlice from '@/entities/tab/model/TabSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const combineSliced = combineReducers({
	query: QuerySlice,
	tab: TabSlice,
});

export const store = configureStore({
	reducer: combineSliced,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
