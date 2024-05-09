import { PayloadAction } from '@reduxjs/toolkit';
import { TabQuery } from '../model/TabSlice';

export type SaveCurrentTabActionPayload = PayloadAction<TabQuery>;
export type ChangeCurrentTabActionPayload = PayloadAction<{
	id: number;
	prevQuery: TabQuery;
}>;
export type CreateTabActionPayload = PayloadAction<{ name: string }>;
