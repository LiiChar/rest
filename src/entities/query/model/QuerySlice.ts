import { createSlice } from '@reduxjs/toolkit';
import {
	AddHeaderActionPayload,
	AddParamActionPayload,
	ChangeMethodActionPayload,
	ChangeQueryActionPayload,
	SetNameActionPayload,
	SetQueryActionPayload,
} from './../config/payload';
import { Method } from '@/shared/types/query';
import { submitQuery } from './QueryApi';
import { addParams, parseUtlToParam } from '@/shared/lib/request/url';

export type Param = {
	index: number;
	key: string;
	value: string;
};

export type Header = {
	index: number;
	key: string;
	value: string;
};

export interface QueryState {
	name: string | null;
	query: string;
	params: Param[];
	method: Method;
	response: string;
	loading: boolean;
	header: Header[];
}

export const initialState: QueryState = {
	name: null,
	query: '',
	params: [
		{
			index: 0,
			key: '',
			value: '',
		},
		{
			index: 1,
			key: '',
			value: '',
		},
		{
			index: 2,
			key: '',
			value: '',
		},
		{
			index: 3,
			key: '',
			value: '',
		},
	],
	method: 'GET',
	response: '',
	loading: false,
	header: [
		{
			index: 0,
			key: '',
			value: '',
		},
		{
			index: 1,
			key: '',
			value: '',
		},
		{
			index: 2,
			key: '',
			value: '',
		},
		{
			index: 3,
			key: '',
			value: '',
		},
	],
} satisfies QueryState as QueryState;

export const querySlice = createSlice({
	name: 'query',
	initialState,
	reducers: {
		changeQuery: (state, action: ChangeQueryActionPayload) => {
			parseUtlToParam(action.payload).forEach(el => {
				state.params[el.index] = el;
			});
			state.query = action.payload;
		},
		changeMethod: (state, action: ChangeMethodActionPayload) => {
			state.method = action.payload;
		},
		setName: (state, action: SetNameActionPayload) => {
			state.name = action.payload;
		},
		addHeader: (state, action: AddHeaderActionPayload) => {
			const { index } = action.payload;
			state.header[index] = action.payload;

			state.header = [...state.header];
		},
		addParam: (state, action: AddParamActionPayload) => {
			const { index } = action.payload;
			state.params[index] = action.payload;

			state.params = [...state.params];
			state.query = addParams(state.query, state.params);
		},
		setQuery: (state, action: SetQueryActionPayload) => {
			state.header = action.payload.header;
			state.loading = action.payload.loading;
			state.method = action.payload.method;
			state.params = action.payload.params;
			state.query = action.payload.query;
			state.response = action.payload.response;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(submitQuery.pending, state => {
				state.loading = true;
			})
			.addCase(submitQuery.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.response = payload;
			})
			.addCase(submitQuery.rejected, (state, { payload }) => {
				state.loading = false;
				state.response = JSON.stringify(payload);
			});
	},
});

export const {
	addParam,
	setName,
	addHeader,
	changeQuery,
	changeMethod,
	setQuery,
} = querySlice.actions;
export default querySlice.reducer;
