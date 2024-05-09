import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '@/app/store/Store';

export const submitQuery = createAsyncThunk('query', async () => {
	const { method, query, header } = store.getState().query;
	const headerRecord = header.reduce<Record<string, string>>((acc, head) => {
		if (!head.key) {
			return acc;
		}
		acc[head.key] = head.value;
		return acc;
	}, {});
	const config: RequestInit = {
		method: method,
		headers: headerRecord,
	};

	console.log(config);

	const res: string = await fetch(query, config).then(data => data.text());
	return res;
});
