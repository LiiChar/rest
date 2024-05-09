import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '@/app/store/Store';

export const submitQuery = createAsyncThunk('query', async () => {
	const { method, query } = store.getState().query;
	const res: string = await fetch(query, {
		method,
	}).then(data => data.text());
	return res;
});
