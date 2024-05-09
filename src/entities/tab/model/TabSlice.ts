import { createSlice } from '@reduxjs/toolkit';
import { QueryState } from '@/entities/query/model/QuerySlice';
import {
	SaveCurrentTabActionPayload,
	ChangeCurrentTabActionPayload,
	CreateTabActionPayload,
} from '../config/payload';
import { initialState as InitialStateQuery } from '@/entities/query/model/QuerySlice';

export type TabQuery = QueryState;

export interface TabState {
	currentTab: TabQuery | null;
	queries: TabQuery[];
}

const initialState: TabState = {
	currentTab: null,
	queries: [],
} satisfies TabState as TabState;

export const tabSlice = createSlice({
	name: 'tab',
	initialState,
	reducers: {
		saveCurrentTab: (state, action: SaveCurrentTabActionPayload) => {
			state.currentTab = action.payload;
			state.queries = [action.payload, ...state.queries];
		},
		changeCurrentTab: (state, action: ChangeCurrentTabActionPayload) => {
			const prevQuery = action.payload.prevQuery;
			if (prevQuery) {
				const prevQueryIndex = state.queries.findIndex(
					query => query.name == prevQuery.name
				);

				if (prevQueryIndex != -1) {
					const abs = [...state.queries];
					abs.splice(prevQueryIndex, 1, prevQuery);
					state.queries = abs;
				}
			}

			state.currentTab = state.queries[action.payload.id];
		},
		createNewTab: (state, action: CreateTabActionPayload) => {
			const newTab = { ...InitialStateQuery, name: action.payload.name };
			state.currentTab = newTab;
			state.queries = [newTab, ...state.queries];
		},
	},
});

export const { changeCurrentTab, createNewTab, saveCurrentTab } =
	tabSlice.actions;
export default tabSlice.reducer;
